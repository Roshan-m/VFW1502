var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images');

var  galleryList= gallery.getDirectoryListing();

var loadScrollable2 = require('scrollable');

for(var i=0; i<galleryList.length; i++){
	var imageSquare = Ti.UI.createImageView({ 
			image: 'images/' + galleryList[i],
			height: 106,
			width: 106,
			borderColor :'white',
	});
	imageSquare.addEventListener('click', function(){
		loadScrollable2.clickWin.open();
		console.log(imageSquare);
	});
winScroll.add(imageSquare);
};


exports.gallery=gallery;
exports.galleryList=galleryList;

