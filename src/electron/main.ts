import { app, BrowserWindow } from 'electron';
import * as path from 'path';

// boilerplate electron code from https://github.com/electron/electron-quick-start-typescript/blob/main/src/main.ts
function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
    });

    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, '../../dist/lgndry/index.html'));

    // Open the DevTools.
    mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        // special exception for macOS
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// must make special exception for macOS (for some reason)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
