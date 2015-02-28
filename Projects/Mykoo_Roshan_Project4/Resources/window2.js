var win2 = Ti.UI.createWindow({
	backgroundColor: '#9779D2',

});
//math.randomnumber to i in for loop <number of pictures or length of array
var buttonView = Ti.UI.createView({
	height : 40,
	width : 200,
	bottom: 80,
	borderColor: 'white',
	backgroundGradient: {
		type: 'linear',
        startPoint: { x: '0%', y: '50%' },
        endPoint: { x: '100%', y: '50%' },
        colors: [ '#7C3295', '#883091'],
        startRadius: '90%',
        endRadius: 0,
        backfillStart: true
		},
});

var changeGame = Ti.UI.createLabel({
	text:'Change Game',
	color:'white',
});
buttonView.add(changeGame);

// Create a Button.
var button = Ti.UI.createButton({
	height : 40,
	width : 200,
	bottom: 100,
});

// Listen for click events.
button.addEventListener('click', function() {
	alert('button was clicked!');
});

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images');

var  galleryList= gallery.getDirectoryListing();

for(var i=0; i<galleryList.length; i++){
var imageSquare = Ti.UI.createImageView({ 
			image: 'images/' + galleryList[i],
			height: 314,
			width: 220,
			borderColor :'white',
			id:i,
			top: 10,
	});
};

// Add to the parent view.
buttonView.add(button);

win2.add(imageSquare);
win2.add(buttonView);
exports.win2=win2;
