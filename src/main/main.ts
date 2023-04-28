import { BrowserWindow, BrowserView, app, screen } from 'electron';

const __apppath = app.getAppPath();
const isDevelopment = process.env.NODE_ENV !== 'production';

let browser: BrowserWindow | null = null;

let tab: BrowserView[] = [];

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
