const { app, BrowserWindow } = require('electron');
const SITE_URL = "https://chatgpt.com/";
function createWindow () {
  const win = new BrowserWindow({ width: 1200, height: 800, autoHideMenuBar: true, webPreferences: { contextIsolation: true, nodeIntegration: false } });
  win.maximize();
  win.loadURL(SITE_URL);
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
