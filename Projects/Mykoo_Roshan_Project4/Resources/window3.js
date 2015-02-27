var winList = Ti.UI.createWindow({
	backgroundColor:"#ffffff",
});



var listDetailLabel = function(b){
	var listDetailView = Ti.UI.createView({
	width:200,
	height:44,
	backgroundColor :'#FFFFFF',
	});
	listDetail.add(listDetailView);
	
	var lDetail =Ti.UI.createLabel({
	text: b.source.d});
	descriptionView.add(description);
};
//Listview
var windowList = Ti.UI.createListView();
//sections
var sections2 =[];

windowList.addEventListener('itemclick', function(){
		nav.openWindow(listDetail);
		listDetail.add(listDetailView);

	console.log("hello");
});


winList.add(windowTable);

exports.winList=winList;