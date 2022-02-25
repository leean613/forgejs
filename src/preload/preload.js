const { contextBridge, ipcRenderer, ipcMain } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  openFile: async () => ipcRenderer.invoke('openFile')
});
