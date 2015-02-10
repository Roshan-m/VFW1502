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
	win.open();
	win.add(windowTable);
});


//array
var games = {
 ps4 :[ 
 	{title:"Destiny"},
	{title:"Shadow of Mordor"},
	{title:"Infamous Second Son"},
	{title:"FarCry4"},
	{title:"Grand Theft Auto V"}],
 xboxone :[
	{title:"Call of Duty Advanced Warfare"},
	{title:"Halo: Master Cheif Collection "},
	{title:"Dragon Age Inquisition"},
	{title:"Titanfall"},
	{title:"Forza Horizon 2"}],
 wiiu :[
	{title:"Mario Kart 8"},
	{title:"Super Smash Bros. WiiU"},
	{title:"Super Mario 3d World"},
	{title:"The legend of Zelda: The Wind Waker HD"},
	{title:"The LEGO Movie Videogame"}],
	};
//ps4	
var ps4 = Ti.UI.createView({
	backgroundColor: "blue"
});
var ps4Label = Ti.UI.createLabel({
	text: "Playstation 4",
	color: "white",
});
ps4.add(ps4Label);
var ps4Section = Ti.UI.createTableViewSection({
	headerView : ps4,
});

//xbox
var xbox = Ti.UI.createView({
	backgroundColor: "green"
});
var xboxLabel = Ti.UI.createLabel({
	text: "Xbox One",
	color: "white",
});
xbox.add(xboxLabel);
var xboxSection = Ti.UI.createTableViewSection({
	headerView : xbox,
});

//wiiu
var wiiu = Ti.UI.createView({
	backgroundColor: "white"
});
var wiiuLabel = Ti.UI.createLabel({
	text: "Wii U",
	color: "blue",
});
wiiu.add(wiiuLabel);
var wiiuSection = Ti.UI.createTableViewSection({
	headerView : wiiu,
});


//sections
for(i=0; i<games.ps4.length; i++){
	var ps4Lines = Ti.UI.createTableViewRow({
		title: games.ps4[i].title,
	});
ps4Section.add(ps4Lines);
};

for(i=0; i<games.xboxone.length; i++){
	var xboxLines = Ti.UI.createTableViewRow({
		title: games.xboxone[i].title,
	});
xboxSection.add(xboxLines);
};

for(i=0; i<games.wiiu.length; i++){
	var wiiuLines = Ti.UI.createTableViewRow({
		title: games.wiiu[i].title,
	});
wiiuSection.add(wiiuLines);
};

var windowTable = Ti.UI.createTableView({
	headerTitle: "Best games of 2014 by Console",
	top : 20,
	data: [ps4Section, xboxSection, wiiuSection],
	separatorColor: "grey",
});


listView.add(list);
tableView.add(table);

exports.tableView=tableView;
exports.listView=listView;
exports.title=title;