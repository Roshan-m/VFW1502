var win3 = Ti.UI.createWindow({
	backgroundColor:"#ffffff",
});

// var listDetail = Ti.UI.createWindow({
		// backgroundColor:'#DB949D',
// });
// var listDetailLabel = function(b){
	// var listDetailView = Ti.UI.createView({
	// width:200,
	// height:44,
	// backgroundColor :'#FFFFFF',
	// });
	// listDetail.add(listDetailView);
// 	
	// var lDetail =Ti.UI.createLabel({
	// text: b.source.d});
// };
//Listview
var windowList = Ti.UI.createListView();
//sections
var sectionsName =[];

// windowList.addEventListener('itemclick', function(){
		// nav.openWindow(listDetail);
		// listDetail.add(listDetailView);
// 
	// console.log("hello");
// });
 var gamesSection = Ti.UI.createListSection({ headerTitle:'Best games of 2014'});
	 var gamesDataSet =[
	{properties: { title: 'Destiny', description:"7.8"}},
	{properties: { title:"Shadow of Mordor", description:"9.3"}},
	{properties: { title:"Infamous Second Son", description:"8.7"}},
	{properties: { title:"Child of Light", description:"8.5"}},
	{properties: { title:"Grand Theft Auto V", description:"10"}},
	{properties: { title:"Bayonetta 2", description:""}},
	{properties: { title:"Child Of Light", description:""}},
	{properties: { title:"Dark Souls 2", description:""}},
	{properties: { title:"Hearthstone", description:""}},
	{properties: { title:"Last Of Us", description:""}},
	{properties: { title:"Mario Kart 8", description:""}},
	{properties: { title:"P.T.", description:""}},
	{properties: { title:"Middle-Earth: Shadow of Mordor", description:""}},
	{properties: { title:"Shovel Knight", description:""}},
	{properties: { title:"Super Smash Bros. for WiiU", description:""}},
	
	 ];
	 
	 gamesSection.setItems(gamesDataSet);
	sectionsName.push(gamesSection);
windowList.sections=sectionsName;


win3.add(windowList);

exports.win3=win3;