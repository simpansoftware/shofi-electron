// i hate dom ngl and i decided to use e for some reason
const { ipcRenderer } = require('electron');

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("app").addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            ipcRenderer.send("run-script", e.target.value);
        }
    });
});
