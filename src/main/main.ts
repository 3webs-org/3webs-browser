import { BrowserWindow, WBrowserView, app, screen, ipcMain } from 'electron';

const __apppath = app.getAppPath();
const isDevelopment = process.env.NODE_ENV !== 'production';

let browser: BrowserWindow | null = null;

let tabs: { [key: number]: WBrowserView } = {};

let controlView: WBrowserView | null = null;

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
    controlView = new WBrowserView({
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
            const tab = new WBrowserView({
                webPreferences: {
                    nodeIntegration: false
                }
            });
            tab.webContents.loadURL('https://www.google.com');
            tab.setBounds({
                x: 0,
                y: 130,
                width: browser.getBounds().width,
                height: browser.getBounds().height - 130
            });
            browser.addBrowserView(tab);

            for (let otherTab of Object.values(tabs)) {
                otherTab.setBounds({
                    x: browser.getBounds().width, // Off screen
                    y: 130,
                    width: browser.getBounds().width,
                    height: browser.getBounds().height - 130
                });
            }

            let i;
            for (i = Object.keys(tabs).length; i <= 0; i--) {
                if (i in tabs) continue;
                tabs[i] = tab;
            }

            event.reply('new-tab-created', key, i);
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
        } catch (e) {
            event.reply('select-tab-error', e);
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
            event.reply('load-url-error', e);
        }
    });
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
