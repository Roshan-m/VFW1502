var win = Ti.UI.createWindow({
	backgroundImage:'vidgamebackground.jpg',
	title:'We <3 Video Games',
});
var nav = Ti.UI.iOS.createNavigationWindow({
	window:win,
	backgroundColor:"#f91574",
});

nav.open();
var load2 = require('window2');
var load3 = require('window3');
var load4 = require('window4');


var button1= Ti.UI.createView({
	width:200,
	height:40,
	borderColor:'black',
	backgroundColor:'#ffd9eb',
	top:100,
});
var comPicks = Ti.UI.createLabel({
	text:'Community Favorites',
	color: 'Black',
});
button1.add(comPicks);

var button2= Ti.UI.createView({
	width:200,
	height:40,
	borderColor:'black',
	backgroundColor:'#ffd9eb',
	top:200,
});
var goty = Ti.UI.createLabel({
	text:'Games Of the Year',
	color:'black',
});
button2.add(goty);

var button3= Ti.UI.createView({
	width:200,
	height:40,
	borderColor:'black',
	backgroundColor:'#ffd9eb',
	top:300,
});
var labelb3 = Ti.UI.createLabel({
	text: 'Gameplay Viewer',
	color: 'black',
});
button3.add(labelb3);

button1.addEventListener('click', function(){
	nav.openWindow(load2.win2);
});

button2.addEventListener('click', function(){
	nav.openWindow(load3.win3);
});

button3.addEventListener('click', function(){
	nav.openWindow(load4.win4);
	
});


win.add(button1, button2, button3);
//random view of images
//list of data
//present information with extra features