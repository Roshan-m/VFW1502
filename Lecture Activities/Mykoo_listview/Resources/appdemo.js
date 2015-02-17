var win = Ti.UI.createWindow({
	backgroundColor : "#ffffff"});

var table = Ti. UI.createTableView();
var sectionsCollection = [];
var section = Ti.UI.createTableViewSection();

var row = Ti.UI.createTableViewRow({
	Title: "Sample Item",
	
	});
	
row.addEventListener('click', function(){
	console.log("Ive been clicked"),
	detail.open();
});
	
	
	
table.add(row);
sectionsCollection.push(section);
table.setData(sectionsCollection);
win.add(table);
win.open();
