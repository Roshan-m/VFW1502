var win1 =Ti.UI.createWindow({
	backgroundColor:"#BEE9DB",
});

var nav = Titanium.UI.iOS.createNavigationWindow({
   window: win1
});

var win2= Ti.UI.createWindow({
	title:'Best Games of 2014 by Console',
});
var loadFile= require('second');





win1.open();
win1.add(loadFile.tableView);
win1.add(loadFile.listView);
win1.add(loadFile.title);
