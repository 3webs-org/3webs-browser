import { app } from 'electron';
import BrowserLikeWindow from 'electron-as-browser';
import { fileURLToPath } from 'url';
import path from 'path';

import fileUrl from 'file-url';

let browser: BrowserLikeWindow | null = null;

const __apppath = app.getAppPath();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isDevelopment = process.env.NODE_ENV !== 'production';

function createWindow() {
    if (browser) {
        throw new Error('Browser window already exists');
    }

    let controlPanel = fileUrl(`${__apppath}/renderer/index.html`);
    
    browser = new BrowserLikeWindow({
        controlHeight: 99,
        controlPanel,
        startPage: 'https://google.com',
        blankTitle: 'New tab',
        controlReferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
        debug: isDevelopment,
    });

    browser?.on('closed', () => {
        browser = null;
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
