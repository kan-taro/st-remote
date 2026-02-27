const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 600,
    webPreferences: {
      nodeIntegration: true,    // JSでNodeの機能を使えるようにする
      contextIsolation: false,   // パッケージ化後の「動かない」を防ぐために一旦false
      webSecurity: false         // ローカルのBose API (HTTP) への通信を許可する
    }
  });

  // ファイルパスを確実に読み込む
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // デバッグ用に最初はデベロッパーツールを開く設定（完成したら消す）
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
