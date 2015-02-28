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



// Listen for click events.

var gamesArray =[
'images/bayonetta.jpg',
'images/childoflight.jpg',
'images/darksouls2.jpg',
'images/destiny.jpg',
'images/divinity.jpg',
'images/dragonageinquisition.jpg',
'images/gta5.jpg',
'images/hearthstone.jpg',
'images/lastofus.jpg',
'images/mariokart.jpg',
'images/pt.jpg',
'images/shadowofmordor.jpg',
'images/shovelknight.jpg',
'images/smash4.jpg',
];

var imageSquare = Ti.UI.createView({ 
			height: 314,
			width: 220,
			borderColor :'white',
			top: 10,
});

var randomFunctionGen = function(maximum, minimum){
	return Math.floor(Math.random()*(maximum-minimum+1)+minimum)
};

buttonView.addEventListener('click', function(){
	imageSquare.setBackgroundImage(gamesArray[randomFunctionGen(gamesArray.length, 1)-1]);
	console.log('hi');
});

// Add to the parent view.
// buttonView.add(button);

win2.add(imageSquare);
win2.add(buttonView);
exports.win2=win2;
