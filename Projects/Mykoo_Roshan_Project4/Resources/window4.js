var win4 = Ti.UI.createWindow({
	backgroundColor:"#000000"
});

var videoPlayer = Titanium.Media.createVideoPlayer({
    autoplay : false,
    mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,    
	scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
});

videoPlayer.url = "destiny.mp4"
win4.add(videoPlayer);



exports.win4=win4;