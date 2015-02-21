//Platform Width
var deviceWidth = Ti.Platform.displayCaps.platformWidth;
var numOfItems = 25;
var itemWidth;
var space;

//Window
var win =Ti.UI.createWindow({backgroundColor:'#cccccc'});
//ScrollView
var scrollWin = Ti.UI.createScrollView({
	//Set Layout
	//Set 
});
//Loop
for(i=0; i<numOfItems; i++){
	//View
	var View = Ti.UI.crreateView({
		backgroundColor:'red',
		width: itemSize,
		height: itemSize,
	});
	scrollWin.add(View);	
	//Positioin 4UP width Padding
	
}


//Add
win.add(scrollWin);
//Open
win.open();
