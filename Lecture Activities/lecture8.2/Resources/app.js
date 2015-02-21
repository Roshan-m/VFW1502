var win = Ti.UI.createWindow();

var data = [
	{color:"red", name: "Roses"},
	{color:"blue", name:'grass'},
	{color:"green", name:"grass"},
];
var viewsCollection= [];
for(var i=0; i<data.length; i++){
	var view= Ti.UI.createView({
		backgroundColor: data[i].color,
		name:data[i].name,
	});
	var label= Ti.UI.createLabel({
		text:data[i].name,
	});
	view.add(label);
	viewsCollection.push(view);
};

var view1 = Ti.UI.createView({ backgroundColor:'red',name:"View red"});
var view2 = Ti.UI.createView({ backgroundColor:'blue',name:"View blue"});
var view3 = Ti.UI.createView({ backgroundColor:'green',name:"View green"});

var scrollableView = Ti.UI.createScrollableView({
  views:[view1,view2,view3],
  showPagingControl:true
});

scrollableView.addEventListener('scrollend', function(){
	if(eventData.source.views[0].name2){
		 alert('You are looking at yellow');
	}
});

win.add(scrollableView);
win.open();