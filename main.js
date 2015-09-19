var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;


app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
        width: 800,
        height: 480,
        resizable:false,
        fullscreen: true,
        show: false,
        'auto-hide-menu-bar': true, 
 });
  mainWindow.loadUrl('chrome://gpu/');
  mainWindow.show();
});
