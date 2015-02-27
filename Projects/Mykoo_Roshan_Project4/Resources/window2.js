var randomPicture = Ti.UI.createWindow({
	backgroundColor: '#9779D2',

});

var buttonView = Ti.UI.createView({
	height : 40,
	width : 200,
	bottom: 100,
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

// Add to the parent view.
buttonView.add(button);

randomPicture.add(buttonView);
exports.randomPicture=randomPicture;
