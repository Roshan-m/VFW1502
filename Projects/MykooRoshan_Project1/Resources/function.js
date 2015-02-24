//Declaring Array
var fpsGames= ["Call Of Duty", "Battlefield", "Minecraft", "Team Fortress 2", "Halo"];


//Creating view to display array values
//VIEW, WINDOW, LABEL are all objects
//Middle viewbox variable
var view1 = Ti.UI.createView({
	width: 200,
	height :44,
	top:70,
	backgroundColor:"White",
});

//Previous Button variable
var previousBox= Ti.UI.createView({
	width:120,
	height: 44,
	left:15,
	bottom:20,
	backgroundImage:"Arrow_LEFT.png",
});

//Next Button variable
var nextBox= Ti.UI.createView({
	width:120,
	height: 44,
	right:15,
	bottom:20,
	backgroundImage:"Arrow_RIGHT.png",
});


var game = 0; 

//Event Listeners
previousBox.addEventListener('click',function(){
	myLabel.text= fpsGames[game];
	if(game<=fpsGames.length){
	game--;
	console.log("Incremented");
}else{
	game=0;
};
});

nextBox.addEventListener('click',function(){
	myLabel.text= fpsGames[game];
	if(game<=fpsGames.length){
	game++;
	console.log("Incremented");
}else{
	game=0;
};
});
//Array Logic
view1.addEventListener('click',function(){
	myLabel.text= fpsGames[game];
	if(game<=fpsGames.length){
	game++;
	console.log("Incremented");
}else{
	game=0;
};
});






//Export
exports.game=game;
exports.fpsGames=fpsGames;
exports.view1=view1;
exports.previousBox= previousBox;
exports.nextBox= nextBox;