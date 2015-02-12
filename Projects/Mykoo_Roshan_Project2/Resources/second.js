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
	{title:"Call of Duty Advanced Warfare"},
	{title:"Halo: Master Cheif Collection "},
	{title:"Dragon Age Inquisition"},
	{title:"Titanfall"},
	{title:"Forza Horizon 2"}],
 WiiU :[
	{title:"Mario Kart 8"},
	{title:"Super Smash Bros. WiiU"},
	{title:"Super Mario 3d World"},
	{title:"The legend of Zelda: The Wind Waker HD"},
	{title:"The LEGO Movie Videogame"}],
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
	for(i=0;i<games[n].length;i++){
	 	var row = Ti.UI.createTableViewRow({
	 		title: games[n][i].title,
	 	});
	 	section.add(row);
	 }
	sections.push(section);
}
windowTable.setData(sections);



exports.tableView=tableView;
exports.listView=listView;
exports.title=title;