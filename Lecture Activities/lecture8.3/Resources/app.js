

var win = Ti.UI.createWindow({
	backgroundColor:'#cccccc',
	orientationModes: [
	Titanium.UI.PORTRAIT,
	Titanium.UI.UPSIDE_PORTRAIT,
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT
	],
	});

var box = Ti.UI.createView({
	backgroundColor: "#297A6A",
	width: 200,
	height: 200,
});

var changeSize = function(){
	phoneSize =Ti.Platform.displayCaps.platformWidth;
	box.width = phoneSize/2;
	console.log(phoneSize);
};
//Event Listener
box.addEventListener('orientationchange',changeSize);

win.add(box);
win.open();
