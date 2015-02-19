var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images');

var  galleryList= gallery.getDirectoryListing();

for(var i=0; i<galleryList.length; i++){
	var imageSquare = Ti.UI.createImageView({ 
			image: 'images/' + galleryList[i],
			height: 106,
			width: 106,
			borderColor :'white',
	});
winScroll.add(imageSquare);
};


exports.gallery=gallery;
exports.galleryList=galleryList;

