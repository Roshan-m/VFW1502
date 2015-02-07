//Create Window
var win= Ti.UI.createWindow({
	backgroundColor:"#66CCBE",
});

//Create view
var view = Ti.UI.createView({
	backgroundColor: "#AC393D",
	width: 200,
	height: 200,
});

//Add event listener
view.addEventListener('click', function(){
	alert("I've been clicked!");
});



//Add view to Window
win.add(view);

//Open Window
win.open();
