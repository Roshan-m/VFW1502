//Platform Width
var deviceWidth = Ti.Platform.displayCaps.platformWidth;
var numOfItems = 250;
var itemsInRow = 4;
var space= 5;
var spaceUsed = 4*2*5;

var itemSize = (deviceWidth-spaceUsed)/4;

//Window
var win =Ti.UI.createWindow({backgroundColor:'#cccccc'

});
//ScrollView
var scrollWin = Ti.UI.createScrollView({
	//Set Layout
	layout:"horizontal",
	//Set 
	contentWidth: deviceWidth,
	top: 20,
});
//Loop
for(i=0; i<numOfItems; i++){
	//View
	var view = Ti.UI.createView({
		backgroundColor:'red',
		borderColor:'white',
		width: itemSize,
		height: itemSize,
		left:space,
		right:space,
		bottom:space,
	});
	var label = Ti.UI.createLabel({
		color: 'white',
		text:"Square" + i,
	});
	view.add(label);
	scrollWin.add(view);	
	//Positioin 4UP width Padding
	
};


//Add
win.add(scrollWin);
//Open
win.open();
