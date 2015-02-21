var pwidth = Ti.Platform.displayCaps.platformWidth;

var win= Ti.UI.createWindow({
	backgroundColor:"#cccccc",
	title: 'Favorite Albums',
	titleControl : Titanium.UI.View,
});
var nav = Titanium.UI.iOS.createNavigationWindow({
	window: win,
});

var winScroll = Ti.UI.createScrollView({
	layout: 'horizontal',
	contentWidth: pwidth,
});

//Click window to scrollable window


var loadSecond = require('second');
var loadScrollable = require('scrollable');

winScroll.add(loadSecond.clickWin);

win.add(winScroll);
win.add(loadSecond.imageSquare);
win.add(loadSecond.galleryList);
win.add(loadSecond.gallery);
nav.open();
