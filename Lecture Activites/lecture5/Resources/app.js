var win2 = Titanium.UI.createWindow({
    backgroundColor: 'red',
    title: 'Red Window'
});

var nav = Titanium.UI.iOS.createNavigationWindow({
   window: win2
});

var win3 = Titanium.UI.createWindow({
    backgroundColor: 'blue',
    title: 'Blue Window'
});

var button = Titanium.UI.createLabel({
    title: 'Open Window',
    width:20,
    height:10,
    color:"white",
});
button.addEventListener('click', function(){
    nav.openWindow(win3, {animated:true});
});

win2.add(button);
var button2 = Titanium.UI.createButton({
    title: 'Close Window'
});
button2.addEventListener('click', function(){
    nav.closeWindow(win3, {animated:false}); //win3.close() will also work!!
});

win3.add(button2);
nav.open();
