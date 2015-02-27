var winList = Ti.UI.createWindow({
	backgroundColor:"#ffffff",
});

var games = [
{title:"Olli Olli",} ,
{title:"The Last Of Us", },
{title:"Dark Souls II", },
{title:"Child Of Light", },
{title:"Super Time Force",},
{title:"Shovel Knight", },
{title:"Divinity: Original Sin", },
{title:"P.T.", },
{title:"Middle-earth: Shadow of Mordor",},];

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

exports.winList=winList;