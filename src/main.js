/* main.js, case 4(extend: send and recv) */
"use strict";
const { BrowserWindow, app, ipcMain } = require("electron");
const { post } = require("axios");

let mainWindow = null;
const CreateWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            webviewTag: true,
            preload: __dirname + "/preload.js",
        },
    });
    mainWindow.on("closed", function () {
        mainWindow = null;
    });

    mainWindow.loadURL("file://" + __dirname + "/emojiinfo.html");
};
app.on("ready", CreateWindow);

ipcMain.handle("request", (event, args) => {
    request(args.host, args.name);
});

function request(host, name) {
    let params = {
        name: name,
    };

    post(host + "/api/emoji", params)
        .then(function (response) {
            send_res(response.data);
        })
        .catch(function (error) {
            if (error.response) {
                send_res_err(error.response.data);
            } else {
                send_err();
            }
        });
}

function send_res(data) {
    mainWindow.webContents.send("response", data);
}

function send_res_err(data) {
    mainWindow.webContents.send("response_error", data);
}

function send_err() {
    mainWindow.webContents.send("error");
}
