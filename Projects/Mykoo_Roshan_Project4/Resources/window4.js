var win4 = Ti.UI.createWindow({
	backgroundColor:"#000000"
});

// var videoPlayer = Titanium.Media.createVideoPlayer({
//     autoplay : false,
//     mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,    
	// scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
// });
// 
// videoPlayer.url = "destiny.mp4"
// win4.add(videoPlayer);

var emailDialog = Ti.UI.createEmailDialog();
emailDialog.subject = "Games Of the Year";
emailDialog.toRecipients = ['Send to'];
emailDialog.messageBody = '<b>Check out last years Games of the year!</b>';
var f = Ti.Filesystem.getFile('cricket.wav');
emailDialog.addAttachment(f);
emailDialog.open();

win4.add(emailDialog);

exports.win4=win4;