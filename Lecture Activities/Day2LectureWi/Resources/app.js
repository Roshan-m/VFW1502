var win= Titanium.UI.createWindow({
	backgroundColor:"#3E7FBB",
});

var title= Titanium.UI.createLabel({
	 text: "Goku space",
	 top:10,
});

var view= Titanium.UI.createView({
	backgroundImage:"goku.png",
	width:200,
	height:200,
	top:50,
});
var view2= Titanium.UI.createView({
	backgroundImage:"galaxy.jpg",
	width:200,
	height:200,
	bottom:100
});

var view3= Titanium.UI.createView({ 
	backgroundImage:"creeper.jpg",
	width:200,
	height:200,
	bottom:10,
});


win.add(view);
win.add(title);
win.add(view2);
win.add(view3);
win.open();
