const { contextBridge, ipcRenderer, ipcMain } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  openFile: async () => ipcRenderer.invoke('openFile'),
  electronAPI: async () => ipcRenderer.invoke('searcDb'),
  insertList: async () => ipcRenderer.invoke('insertList'),
});
