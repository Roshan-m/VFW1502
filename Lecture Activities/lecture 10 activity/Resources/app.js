// create window
//
var win = Titanium.UI.createWindow({  
    backgroundColor:'#fff',
   title: 'search',
});

var nav = Titanium.UI.iOS.createNavigationWindow({
	window: win,
});

    var search = Titanium.UI.createSearchBar({
    barColor:'#D071C3', 
    showCancel:true,
    height:43,
    top:0,
});



win.add(search);
nav.open();
