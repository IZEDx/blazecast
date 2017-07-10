import { app,BrowserWindow } from 'electron';

let mainWindow : Electron.BrowserWindow;

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        title: "Blazecast",
        minWidth: 600,
        minHeight: 500,
        titleBarStyle: 'hidden-inset',
        frame: false,
        webPreferences: {
            experimentalFeatures: true
        }
    });

    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.once('ready-to-show', mainWindow.show);

    mainWindow.on('closed', () => mainWindow = null);
});

app.on('window-all-closed', () => {
    if (process.platform != 'darwin')
        app.exit(0);
})