var pWidth = Ti.Platform.displayCaps.platformWidth;
var galleryScroll = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var galleryListScroll = galleryScroll.getDirectoryListing();

var images= [];

var clickWin = Ti.UI.createWindow({
	backgroundColor:'black',
});


//Loop
for(var i=0; i< galleryListScroll.length; i++){
	
var theImage = Ti.UI.createImageView({
	image: "images/"+ galleryListScroll[i],
	width: pWidth,
	
	});
	var scrollView = Ti.UI.createScrollView({
		maxZoomScale:4.0,
		});
	scrollView.add(theImage);
	images.push(scrollView);
};

var scrollableView = Ti.UI.createScrollableView({
	showPagingControl:true,
	views: images,
	//currentPage:,
});


clickWin.add(scrollableView);

exports.scrollableView=scrollableView; 

exports.clickWin=clickWin; 
