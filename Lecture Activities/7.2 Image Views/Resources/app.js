//Window
var win = Ti.UI.createWindow({
	backgroundColor: '#cccccc',
	layout: "horizontal", 
});

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,"images");

var galleryList = gallery.getDirectoryListing();
 
var viewContainter = Ti.UI.createScrollView({
	layout: "horizontal",

});

// //Loop
// var images = [
	// 'pattern-galaxy.jpg',
	// 'pattern-goku.jpg',
	// 'pattern-medow.jpg',
	// 'pattern-sponge.png',
	// 'pattern-skull.jpg',
// ];
for(var i=0; i<galleryList.length; i++){
	//ImageView

	var skull = Ti.UI.createImageView({
		image : "images/"+galleryList[i],
		width:200,
	});
		//Add
		win.add(skull);

};


//Open Window
win.add(viewContainter);
win.open();
