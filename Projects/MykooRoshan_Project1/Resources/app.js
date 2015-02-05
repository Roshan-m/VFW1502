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

//Declaring Array
var fpsGames= ["Call Of Duty", "Battlefield", "Minecraft", "Team Fortress 2", "Halo"];
//Creating view to display array values

//VIEW, WINDOW, LABEL are all objects
//Middle viewbox variable
var view1 = Ti.UI.createView({
	width: 200,
	height :44,
	top:70,
	backgroundColor:"White",
});

//Previous Button variable
var previousBox= Ti.UI.createView({
	width:120,
	height: 44,
	left:15,
	bottom:20,
	backgroundColor:"White",
});

//Next Button variable
var nextBox= Ti.UI.createView({
	width:120,
	height: 44,
	right:15,
	bottom:20,
	backgroundColor:"White",
});
//Text variable
var previous= Ti.UI.createLabel({
	text: "Previous",
	bottom:20,
	right:15,
	color:"#000000",
});
//Text variable
var next= Ti.UI.createLabel({
	text:"Next",
	bottom: 20,
	right:15,
	color:"#000000",
});

var arrayLabel = Ti.UI.createLabel({
	text : fpsGames[2],
	color: "#000000",
	
});

view1.add(arrayLabel);
previousBox.add(previous);
nextBox.add(next);
win.add(nextBox);
win.add(previousBox);
win.add(view1);
win.add(title);
win.open();
