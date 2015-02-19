Ti.UI.BackgroundColor = "#cccccc";
//Window
var win = Ti.UI.createWindow({
	backgroundColor : '#cccccc',
	layout: "horizontal",
	top: 20,

});
//Loop
var makeViews = function(){
for(var i=0; i<numberOfViews; i++){

	var newView = Ti.UI.createView({
		backgroundColor: "red",
		borderColor: 'black',
		width: 100,
		height: 100,
	
		top: 0,
	});	
	var newLabel = Ti.UI.createLabel({
		color: "#fff",
		text : "Sruare #"+i,
	})
	//Add
		newView.add(newLabel);
		win.add(newView);
	}
};

//Views





//Open
win.open();
