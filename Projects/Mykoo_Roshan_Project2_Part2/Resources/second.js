//Adding description to row data
var descriptionWin = Ti.UI.createWindow({
			backgroundColor: "#9095DA",
		});
var generateLabel = function(a){
	var descriptionView = Ti.UI.createView({
	width:200,
	height:44,
	backgroundColor :'#FFFFFF',
	});
	descriptionWin.add(descriptionView);
	
	var description =Ti.UI.createLabel({
	text: a.source.d});
	descriptionView.add(description);
};


//Views
var tableView = Ti.UI.createView({
	width:200,
	height:44,
	backgroundColor :'#FFFFFF',
	top :200,
});

var listView = Ti.UI.createView({
	width:200,
	height:44,
	backgroundColor:'white',
	bottom:200,
});
var title = Ti.UI.createLabel({
	text:"Best Videogames of 2014",
	top:20,
	textAlign:Titanium.UI.TEXT_ALIGNMENT_CENTER,
	color:'white',
	font: {
		fontStyle:'bold',
		fontSize: 29,
	}	
});

var table = Ti.UI.createLabel({
	text : "Table View",
	font :{
	fontFamily: "Helvetica",
	fontSize: '24px',}
});
var list = Ti.UI.createLabel({
	text : "List View",
	font :
	{fontFamily: "Helvetica",
	fontSize: 24,}
});

tableView.addEventListener('click',function(){
	nav.openWindow(win2);
	win2.add(windowTable);
});

listView.addEventListener('click',function(){
	nav.openWindow(win3);

});

nav.open();

listView.add(list);
tableView.add(table);


//array
var games = {
 Ps4 :[ 
 	{title:"Destiny", description:"7.8"},
	{title:"Shadow of Mordor", description:"9.3"},
	{title:"Infamous Second Son", description:"8.7"},
	{title:"FarCry4", description:"8.5"},
	{title:"Grand Theft Auto V", description:"10"}],
 XboxOne :[
	{title:"Call of Duty Advanced Warfare", description:"8"},
	{title:"Halo: Master Cheif Collection ", description:"8"},
	{title:"Dragon Age Inquisition", description:"9"},
	{title:"Titanfall", description:"8"},
	{title:"Forza Horizon 2", description:"8"}],
 WiiU :[
	{title:"Mario Kart 8", description:"9"},
	{title:"Super Smash Bros. WiiU", description:"10"},
	{title:"Super Mario 3d World", description:"8"},
	{title:"The legend of Zelda: The Wind Waker HD", description:"7"},
	{title:"The LEGO Movie Videogame", description:"7"}],
	};
	
	
//table
var windowTable = Ti.UI.createTableView({
	separatorColor: "black",
});

//sections
var sections= [];
for(n in games){
	 var section = Ti.UI.createTableViewSection({
		headerTitle:n,
	});
	section.addEventListener('click', function(e){
		nav.openWindow(descriptionWin);
		descriptionWin.add();
		console.log(e);
		generateLabel(e);
	console.log();
});
	for(i=0;i<games[n].length;i++){
	 	var row = Ti.UI.createTableViewRow({
	 		title: games[n][i].title,
	 		d: games[n][i].description,
	 	});
	 	section.add(row);
	 }
	sections.push(section);
}
windowTable.setData(sections);





var listDetail = Ti.UI.createWindow({
		backgroundColor:'#DB949D',
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

windowList.addEventListener('click', function(){
		nav.openWindow(listDetail);
		listDetail.add(listDetailView);

	console.log();
});


	 var ps4Section = Ti.UI.createListSection({ headerTitle:'Playstation 4'});
	 var ps4DataSet =[
	{properties: { title: 'Destiny', description:"7.8"}},
	{properties: { title:"Shadow of Mordor", description:"9.3"}},
	{properties: { title:"Infamous Second Son", description:"8.7"}},
	{properties: { title:"FarCry4", description:"8.5"}},
	{properties: { title:"Grand Theft Auto V", description:"10"}},
	 ];
	 
	 ps4Section.setItems(ps4DataSet);
	sections2.push(ps4Section);


	var xboxSection = Ti.UI.createListSection({ headerTitle:'Xbox One'});
	var xboxDataSet = [
	{properties: {title:"Call of Duty Advanced Warfare", description:"8"}},
	{properties: {title:"Halo: Master Cheif Collection ", description:"8"}},
	{properties: {title:"Dragon Age Inquisition", description:"9"}},
	{properties: {title:"Titanfall", description:"8"}},
	{properties: {title:"Forza Horizon 2", description:"8"}},
	];
	
	xboxSection.setItems(xboxDataSet);
	sections2.push(xboxSection);
	
	var wiiuSection = Ti.UI.createListSection({ headerTitle:'Xbox One'});
	var wiiuDataSet = [
	{properties: {title:"Mario Kart 8", description:"9"}},
	{properties: {title:"Super Smash Bros. WiiU", description:"10"}},
	{properties: {title:"Super Mario 3d World", description:"8"}},
	{properties: {title:"The legend of Zelda: The Wind Waker HD", description:"7"}},
	{properties: {title:"The LEGO Movie Videogame", description:"7"}},
	];
	
	wiiuSection.setItems(wiiuDataSet);
	sections2.push(wiiuSection);


// var description = Ti.UI.createLabel({
	// text: e.source.title
// });
// descriptionView.add(description);


windowList.sections=sections2;

exports.tableView=tableView;
exports.listView=listView;
exports.title=title;
exports.windowList=windowList;