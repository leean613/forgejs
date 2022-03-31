const { contextBridge, ipcRenderer, ipcMain } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  openFile: async () => ipcRenderer.invoke('openFile'),
  electronAPI: async (username, password) => ipcRenderer.invoke('searcDb', username, password),
  insertList: async () => ipcRenderer.invoke('insertList'),
  // insert: () => ipcRenderer.invoke
});
