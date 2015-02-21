/*
 Roshan Mykoo,
 2/21/2015,
 VisualFrameworks,
 Lab 8 activity,
 */
var spaceUsed = 4*2*5;

var itemSize = (pWidth-spaceUsed)/4;
var win = Ti.UI.createWindow({
	backgroundColor:'#cccccc',
	orientationModes: [
	Titanium.UI.PORTRAIT,
	Titanium.UI.UPSIDE_PORTRAIT,
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT],
	});

var pWidth = Ti.Platform.displayCaps.platformWidth;

// var view1= Ti.UI.createScrollView({
	// layout: 'horizontal',
	// contentWidth : pWidth,
// });
var view =Ti.UI.createScrollView({
	layout: 'horizontal',
	contentWidth: pWidth,
});

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var galleryList = gallery.getDirectoryListing();


//Loop
for(var i=0; i< galleryList.length; i++){
	
var theImage = Ti.UI.createImageView({
	image: "images/"+ galleryList[i],
	width: pWidth,
	height: itemSize,
	});
	view.add(theImage);
};
console.log(theImage);
win.add(view);
win.open();
