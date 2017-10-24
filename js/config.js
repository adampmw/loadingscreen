/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.08
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "PMW_1.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "PMWRP";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = true;


/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Put the files in the backgrounds/images folder)*/
var l_bgImages = [
	"1.jpg",
	"2.jpg",
	"3.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = false;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = false;

/*Display actual song's name?*/
var l_musicDisplay = false;

/*Music playlist
Place how much .ogg songs you want
(Put the files in the songs folder)*/
var l_musicPlaylist = [
	{mp3: "roc", name: "Rockstar By Post Malone And 21 Savage"},
];

/*Random music order?*/
var l_musicRandom = false;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 15;

/*Enable custom messages?*/
var l_messagesEnabled = false;

/*Enter your custom messages below*/
var l_messages = [
	"Enjoy the server",
	"Thanks for joining us!",
	"Make sure you join our steamgroup pmwdarkrp to get $20,000!"
];"
];

/*Random message order?*/
var l_messagesRandom = false;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;