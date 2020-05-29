const { app, BrowserWindow, Tray } = require("electron");

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");

  app.dock.setIcon("./img/yeet.png");

  // Opens chrome dev tools
  // win.webContents.openDevTools();

  // Changes the title
  win.title = "Testing";
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
