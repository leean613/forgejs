const { app, BrowserWindow, dialog, ipcMain, session } = require('electron');
const path = require('path');
const os = require('os');
import * as fs from 'fs';
import Database from 'better-sqlite3-multiple-ciphers';
import { insertListCustomer } from "./backend/customer/api";
import { getAllCustomer } from './backend/customer/apiPgv2';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

const reactDevToolsPath = "C:/Users/Admin/AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.24.0_0"

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

  // ipcMain.handle('searcDb', (username, password) => {
  //   console.log(username, password);
  //   const result = getAllCustomer(username, password);
  //   console.log("searcDb successfully");
  //   return result;
  // });

  ipcMain.handle('searcDb', async (event, username, password) => {
    let result = await getAllCustomer(username, password);
    return result;
  })

  ipcMain.handle('insertList', async () => {
    const result = await insertListCustomer();
    return result;
  });

  ipcMain.handle('openFile', async () => {
    const result = await dialog.showOpenDialog({ properties: ['openFile'] });
    return result;
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  // createDataBase();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(async () => {
  // load react dev tool
  await session.defaultSession.loadExtension(reactDevToolsPath)
});
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


function createDataBase() {
  /**
   * starting connection
   */
  // let database;
  let databasePath = 'src/database/testCrptyo.db';

  const sqlScript = `CREATE TABLE IF NOT EXISTS customer(
    id integer  PRIMARY KEY autoincrement,
    password TEXT NOT NULL);`;


  try {
    const database = require('better-sqlite3-multiple-ciphers')(databasePath, { fileMustExist: true });
    database.pragma("key='secret-key'");
    database.prepare(sqlScript).run();
    database.close();
  } catch (err) {
    if (!fs.existsSync(databasePath)) {
      console.log(err);
      const database = require('better-sqlite3-multiple-ciphers')(databasePath, { verbose: console.log });
      database.prepare(sqlScript).run();
      database.pragma("rekey='secret-key'");
      database.close();
    }
  }
  /**
   * creating table if not exists in the db
   */
  /**
   * run script
   */

  /**
   * close connection
   */


}
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.