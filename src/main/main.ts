(await import('@electron/remote/main')).initialize(); // Cross-context communication
import { BrowserWindow, BrowserView, app, screen, ipcMain } from 'electron/main';

const __apppath = app.getAppPath();
const isDevelopment = process.env.NODE_ENV !== 'production';

let browser: BrowserWindow | null = null;

let tabs: { [key: number]: BrowserView } = {};

let controlView: BrowserView | null = null;

function createWindow() {
    if (browser) {
        throw new Error('Browser window already exists');
    }

    // Get the screen size
    browser = new BrowserWindow({
        width: screen.getPrimaryDisplay().workAreaSize.width,
        height: screen.getPrimaryDisplay().workAreaSize.height,
        frame: false,
        fullscreen: true
    });

    // Load the control view
    controlView = new BrowserView({
        webPreferences: {
            nodeIntegration: true
        }
    });
    controlView.webContents.loadFile(`${__apppath}/renderer/index.html`);
    controlView.setBounds({
        x: 0,
        y: 0,
        width: browser.getBounds().width,
        height: 130
    });

    // Add the control view to the browser window
    browser.addBrowserView(controlView);

    // Load IPC
    ipcMain.on('new-tab', (event, key) => {
        try {
            const tab = new BrowserView({
                webPreferences: {
                    nodeIntegration: false
                }
            });

            let i: number;
            for (i = Object.keys(tabs).length; i <= 0; i--) {
                if (i in tabs) continue;
                tabs[i] = tab;
            }

            tab.webContents.loadURL('https://www.google.com');
            
            // Monkey patch emit function
            const oldEmit = tab.webContents.emit;
            let oldData: any = {};
            tab.webContents.emit = function (event: string | symbol, ...args: any[]) {
                ipcMain.emit(`emit-contents`, i, event, ...args);

                // Fetch data and forward it to the control view
                let allowableOffsetMinusLower = tab.webContents.canGoBack() ? -1 : 0;
                let allowableOffsetPlusUpper = tab.webContents.canGoForward() ? 1 : 0;
                while (tab.webContents.canGoToOffset(allowableOffsetMinusLower)) {
                    allowableOffsetMinusLower *= 2;
                }
                while (tab.webContents.canGoToOffset(allowableOffsetPlusUpper)) {
                    allowableOffsetPlusUpper *= 2;
                }
                allowableOffsetMinusLower /= 2;
                allowableOffsetPlusUpper /= 2;
                let allowableOffsetMinusUpper = allowableOffsetMinusLower / 2;
                let allowableOffsetPlusLower = allowableOffsetPlusUpper / 2;
                // Binary search
                while (allowableOffsetMinusLower < allowableOffsetMinusUpper) {
                    let mid = Math.floor((allowableOffsetMinusLower + allowableOffsetMinusUpper) / 2);
                    if (tab.webContents.canGoToOffset(mid)) {
                        allowableOffsetMinusLower = mid + 1;
                    } else {
                        allowableOffsetMinusUpper = mid;
                    }
                }
                while (allowableOffsetPlusLower < allowableOffsetPlusUpper) {
                    let mid = Math.floor((allowableOffsetPlusLower + allowableOffsetPlusUpper) / 2);
                    if (tab.webContents.canGoToOffset(mid)) {
                        allowableOffsetPlusUpper = mid;
                    } else {
                        allowableOffsetPlusLower = mid + 1;
                    }
                }
                let allowableOffsetMinus = allowableOffsetMinusLower - 1;
                let allowableOffsetPlus = allowableOffsetPlusUpper - 1;
                // Actually get new data
                let newData = {
                    title: tab.webContents.getTitle(),
                    focused: tab.webContents.isFocused(),
                    loading: tab.webContents.isLoading(),
                    loadingMainFrame: tab.webContents.isLoadingMainFrame(),
                    waitingForResponse: tab.webContents.isWaitingForResponse(),
                    canGoBack: tab.webContents.canGoBack(),
                    canGoForward: tab.webContents.canGoForward(),
                    allowableOffsetMinus,
                    allowableOffsetPlus,
                    audioMuted: tab.webContents.isAudioMuted(),
                    currentlyAudible: tab.webContents.isCurrentlyAudible(),
                    zoomFactor: tab.webContents.getZoomFactor(),
                    zoomLevel: tab.webContents.getZoomLevel(),
                    beingCaptured: tab.webContents.isBeingCaptured(),
                    devToolsOpened: tab.webContents.isDevToolsOpened(),
                    devToolsFocused: tab.webContents.isDevToolsFocused(),
                    offscreen: tab.webContents.isOffscreen(),
                    painting: tab.webContents.isPainting(),
                    userAgent: tab.webContents.getUserAgent(),
                };
                // Get the difference between the old data and the new data
                let diff: any = {};
                for (let key in newData) {
                    if ((newData as any)[key] !== oldData[key]) {
                        diff[key] = (newData as any)[key];
                    }
                }
                // Send the difference to the control view
                ipcMain.emit(`update-contents`, i, diff);
                // Update the old data
                oldData = newData;

                return oldEmit.apply(tab.webContents, [i, event, ...args]);
            };
            // Monkey patch loadURL function
            const oldLoadURL = tab.webContents.loadURL;
            tab.webContents.loadURL = function (url: string, options) {
                ipcMain.emit(`update-contents`, i, {
                    url
                });
                oldData.url = url;
                return oldLoadURL.apply(tab.webContents, [url, options]);
            };
            // Monkey patch loadFile function
            const oldLoadFile = tab.webContents.loadFile;
            tab.webContents.loadFile = function (file: string, options) {
                ipcMain.emit(`update-contents`, i, {
                    url: `file://${file}`
                });
                oldData.url = `file://${file}`;
                return oldLoadFile.apply(tab.webContents, [file, options]);
            };
            // Add the tab to the browser window
            browser.addBrowserView(tab);

            for (let otherTab of Object.values(tabs)) {
                otherTab.setBounds({
                    x: browser.getBounds().width, // Off screen
                    y: 130,
                    width: browser.getBounds().width,
                    height: browser.getBounds().height - 130
                });
            }
            tab.setBounds({
                x: 0,
                y: 130,
                width: browser.getBounds().width,
                height: browser.getBounds().height - 130
            });

            event.reply('new-tab-created', key, i);
            event.reply(`set-active-tab`, key, i);
        } catch (e) {
            event.reply('new-tab-error', key, e);
        }
    });
    ipcMain.on('select-tab', (event, key, id) => {
        try {
            if (!(id in tabs)) {
                throw new Error('Tab does not exist');
            }

            for (let tab of Object.values(tabs)) {
                tab.setBounds({
                    x: browser.getBounds().width, // Off screen
                    y: 130,
                    width: browser.getBounds().width,
                    height: browser.getBounds().height - 130
                });
            }

            tabs[id].setBounds({
                x: 0,
                y: 130,
                width: browser.getBounds().width,
                height: browser.getBounds().height - 130
            });

            event.reply(`selected-tab-${id}`, key);
            event.reply(`set-active-tab`, key, id);
        } catch (e) {
            event.reply(`select-tab-error-${id}`, e);
        }
    });
    ipcMain.on('load-url', (event, id, key, url, options) => {
        try {
            if (!(id in tabs)) {
                throw new Error('Tab does not exist');
            }

            tabs[id].webContents.loadURL(url, options);

            event.reply(`loaded-url-${id}`, key);
        } catch (e) {
            event.reply(`load-url-error-${id}`, e);
        }
    });
    ipcMain.on('load-file', (event, id, key, file, options) => {
        try {
            if (!(id in tabs)) {
                throw new Error('Tab does not exist');
            }

            tabs[id].webContents.loadFile(file, options);

            event.reply(`loaded-file-${id}`, key);
        } catch (e) {
            event.reply(`load-file-error-${id}`, e);
        }
    });
    // Skipped a few IPCs here
    ipcMain.on('close-tab', (event, id, key, options) => {
        try {
            if (!(id in tabs)) {
                throw new Error('Tab does not exist');
            }

            tabs[id].webContents.closeDevTools();
            tabs[id].webContents.close(options);
            browser.removeBrowserView(tabs[id]);
            delete tabs[id];

            event.reply(`closed-tab-${id}`, key);
        } catch (e) {
            event.reply(`close-tab-error-${id}`, e);
        }
    });
    // Skip a few again, I want sleep :(
    ipcMain.on('reload-tab', (event, id, key) => {
        try {
            if (!(id in tabs)) {
                throw new Error('Tab does not exist');
            }

            tabs[id].webContents.reload();

            event.reply(`reloaded-tab-${id}`, key);
        } catch (e) {
            event.reply(`reload-tab-error-${id}`, e);
        }
    });
    ipcMain.on('reload-ignoring-cache-tab', (event, id, key) => {
        try {
            if (!(id in tabs)) {
                throw new Error('Tab does not exist');
            }

            tabs[id].webContents.reloadIgnoringCache();

            event.reply(`reloaded-ignoring-cache-tab-${id}`, key);
        } catch (e) {
            event.reply(`reload-ignoring-cache-tab-error-${id}`, e);
        }
    });
    // Skip more, I'm tired
    ipcMain.on('go-back-tab', (event, id, key) => {
        try {
            if (!(id in tabs)) {
                throw new Error('Tab does not exist');
            }

            tabs[id].webContents.goBack();

            event.reply(`went-back-tab-${id}`, key);
        } catch (e) {
            event.reply(`go-back-tab-error-${id}`, e);
        }
    });
    ipcMain.on('go-forward-tab', (event, id, key) => {
        try {
            if (!(id in tabs)) {
                throw new Error('Tab does not exist');
            }

            tabs[id].webContents.goForward();

            event.reply(`went-forward-tab-${id}`, key);
        } catch (e) {
            event.reply(`go-forward-tab-error-${id}`, e);
        }
    });
    // Skip more
    ipcMain.on('set-user-agent-tab', (event, id, key, userAgent) => {
        try {
            if (!(id in tabs)) {
                throw new Error('Tab does not exist');
            }

            tabs[id].webContents.setUserAgent(userAgent);

            event.reply(`set-user-agent-tab-${id}`, key);
        } catch (e) {
            event.reply(`set-user-agent-tab-error-${id}`, e);
        }
    });
    // Skip the rest for now
}

app.once('ready', async () => {
    createWindow();
});

// If not on macOS, quit when all windows are closed
// if on macOS, only quit when the user quits the app
if (process.platform !== 'darwin') {
    app.on('window-all-closed', () => {
        app.quit();
    });
} else {
    app.on('activate', () => {
        if (browser === null) {
            createWindow();
        }
    });
}
