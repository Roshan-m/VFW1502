//createWindow is a method
var win = Titanium.UI.createWindow({
	backgroundImage:"background.png",
});

//Title at the top of window
var title = Ti.UI.createLabel({
	//Properties
	text: "What is your favorite game?",
	top: 20,
	color:"White",
});


//Text variable
var previous= Ti.UI.createLabel({
	text: "Previous",
	color:"#000000",
});
//Text variable
var next= Ti.UI.createLabel({
	text:"Next",
	color:"#000000",
});
var loadFile = require('function');

var myLabel = Ti.UI.createLabel({
	text : loadFile.fpsGames[0],
	color: "#000000",
	
});

win.open();


loadFile.view1.add(myLabel);
loadFile.previousBox.add(previous);
loadFile.nextBox.add(next);
win.add(loadFile.nextBox);
win.add(loadFile.previousBox);
win.add(loadFile.view1);
win.add(title);
//win.add(loadFile.fpsGames);
