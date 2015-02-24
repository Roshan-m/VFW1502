var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images');

var  galleryList= gallery.getDirectoryListing();

var loadScrollable2 = require('scrollable');

for(var i=0; i<galleryList.length; i++){
	var imageSquare = Ti.UI.createImageView({ 
			image: 'images/' + galleryList[i],
			height: 106,
			width: 106,
			borderColor :'white',
			id:i,
	});
	imageSquare.addEventListener('click', function(e){
		loadScrollable2.scrollableView.currentPage= e.source.id
		nav.openWindow(loadScrollable2.clickWin);
		console.log(e.source.id);
	});
winScroll.add(imageSquare);
};


exports.gallery=gallery;
exports.galleryList=galleryList;