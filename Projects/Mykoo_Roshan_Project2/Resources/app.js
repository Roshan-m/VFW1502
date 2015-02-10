var win =Ti.UI.createWindow({
	backgroundColor:"#BEE9DB",
});

var loadFile= require('second');





win.open();
win.add(loadFile.tableView);
win.add(loadFile.listView);
win.add(loadFile.title);
