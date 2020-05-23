const {app, BrowserWindow} = require("electron");
const path = require("path");

function createWindow()
{
    var window = new BrowserWindow(
    {
        webPreferences: {preload: path.join(__dirname, "colorgame.js")},
        show: false
    });

    window.loadFile(path.join(__dirname, "colorgame.html"));
    window.maximize();
    window.show();
    
    window.on("closed", () => {
        window = null;
    });
}

app.whenReady().then(createWindow);
