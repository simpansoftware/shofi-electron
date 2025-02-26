// this code is fucking dogshit
// also general ass code right here
const { app, BrowserWindow, ipcMain } = require('electron');
const { exec } = require('child_process');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 220,
    frame: false,
    transparent: true, 
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false 
}})

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
    app.quit();
});

// wsl compatibility go brr, may not work
if (process.platform === 'win32') {
ipcMain.on('run-script', (appName) => {
  exec(`wsl bash -c "${appName}"`);
  app.exit()
});
}
else {
  ipcMain.on('run-script', (appName) => {
    exec(`bash -c "${appName}"`);
    app.exit()
  });
}