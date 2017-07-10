import { app,BrowserWindow } from 'electron';

let mainWindow : Electron.BrowserWindow;

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.on('closed', () => mainWindow = null);
});

app.on('window-all-closed', () => {
    if (process.platform != 'darwin')
        app.exit(0);
});