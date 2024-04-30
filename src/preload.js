const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
    request: (host, emojiname) =>
        ipcRenderer.invoke("request", { host: host, name: emojiname }),
    on_res: (listener) =>
        ipcRenderer.on("response", (event, arg) => listener(arg)),
    on_res_err: (listener) =>
        ipcRenderer.on("response_error", (event, arg) => listener(arg)),
    on_err: (listener) => ipcRenderer.on("error", (event) => listener()),
});
