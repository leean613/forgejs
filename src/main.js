import  betterSqlite  from "better-sqlite3";
const { app, BrowserWindow, dialog, ipcMain, session } = require('electron');
const path = require('path');
const os = require('os')

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

const reactDevToolsPath = "C:/Users/Admin/AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.23.0_1"

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    // width: 800,
    // height: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    }
  });
  mainWindow.maximize();

  ipcMain.handle('openFile', async () => {
    // await handleFileOpen();
    const result = await dialog.showOpenDialog({ properties: ['openFile'] });
    return result;
  });

  console.log('====================================');
  console.log(MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY);
  console.log(MAIN_WINDOW_WEBPACK_ENTRY);
  console.log('====================================');
  // and load the index.html of the app.

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(async () => {
  // await session.defaultSession.loadExtension(reactDevToolsPath)
  //Extension react custom add
});
//move to the end file
// app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// app.on('activate', () => {
//   // On OS X it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });

app
  .whenReady()
  .then(() => {
    // ipcMain.handle('searchDb',getAllCustomer);
    //ipcMain.handle('openFile', handleFileOpen)
    createWindow();
    createDataBase();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.


//an edit 
function createDataBase() {
  /**
   * starting connection
   */
  let database;
  let databasePath = 'src/database/test.db';

  try {
    database = betterSqlite(databasePath);
  } catch(err) {
    database = new betterSqlite(databasePath);
  }
  /**
   * creating table if not exists in the db
   */
  const sqlScript = `CREATE TABLE IF NOT EXISTS customer(
    id TEXT PRIMARY KEY,
    password TEXT NOT NULL);`;

  /**
   * run script
   */
  database.prepare(sqlScript).run();

  /**
   * close connection
   */
  database.close();

}
//an edit 