var pwidth = Ti.Platform.displayCaps.platformWidth;

var win= Ti.UI.createWindow({
	backgroundColor:"#cccccc",
	title: 'Favorite Albums',
	titleControl : Titanium.UI.View,
});

var winScroll = Ti.UI.createScrollView({
	layout: 'horizontal',
	contentWidth: pwidth,
});
var clickWin = Ti.UI.createWindow();

var loadFile = require('second');

win.add(winScroll);
win.add(loadFile.imageSquare);
win.add(loadFile.galleryList);
win.add(loadFile.gallery);
win.open();
