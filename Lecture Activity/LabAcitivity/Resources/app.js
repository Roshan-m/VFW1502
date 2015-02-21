/*
 Roshan Mykoo,
 2/21/2015,
 VisualFrameworks,
 Lab 8 activity,
 */

var win = Ti.UI.createWindow({
	backgroundColor:'#cccccc',
	orientationModes: [
	Titanium.UI.PORTRAIT,
	Titanium.UI.UPSIDE_PORTRAIT,
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT],
	});

var pWidth = Ti.Platform.displayCaps.platformWidth;

var view1= Ti.UI.createScrollView({
	layout: 'vertical',
});

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var galleryList = gallery.getDirectoryListing();


//Loop
for(var i=0; i< galleryList.length; i++);{
var theImage = Ti.UI.createImageView({
	image: "images/"+ galleryList[i],
	width: pWidth,
	});
	view1.add(theImage);
};
console.log(theImage);
win.add(view1);
win.open();
