module.exports = {
    mainWindow: null,
    get: function () {
        return mainWindow;
    },
    set: function (window) {
        mainWindow = window;
    }
}
