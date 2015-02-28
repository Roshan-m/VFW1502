var win4 = Ti.UI.createWindow({
	backgroundColor:"#000000"
});
var videoArray= [
	'videos/destiny/mp4',
	'videos/secondson/mp4',
	'videos/shadowofmordor.mp4'
];
 var videoPlayer = Titanium.Media.createVideoPlayer({  
 	autoplay : false,
    mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,    
	scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
});


var randomFunctionGen = function(maximum, minimum){
	return Math.floor(Math.random()*(maximum-minimum+1)+minimum)
};
videoPlayer.url = videoArray[randomFunctionGen(videoArray.length, 1)-1];
win4.add(videoPlayer);


exports.win4=win4;