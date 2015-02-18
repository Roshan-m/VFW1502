var win = Ti.UI.createWindow({
	backgroundColor :'#E2BAE8',
});

var list = Ti.UI.createListView({
	backgroundColor:'#ffffff',
	top:20,
});

var listSections = [];

var produce = Ti.UI.createListSection({
	headerTitle: 'Produce',
});
var dairy= Ti.UI.createListSection({
	headerTitle:'Dairy',
});



///create irems
produceData=[
	{properties: {title : 'Celery'}},
	{properties: {title : 'Carrots'}},
	{properties: {title : 'Apple'}},
];



listSections.push(produce);
listSections.push(dairy);
list.sections = listSections; 

win.add(list);
win.open();
