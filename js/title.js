if (document.addEventListener) {
	document.addEventListener("DOMContentLoaded", function() {
		loaded();
	});
} else if (document.attachEvent) {
	document.attachEvent("onreadystatechange", function() {
		loaded();
	});
}

function loaded() {
	setInterval(loop, 600);
}

var x = 0;
var titleText = [
	"S", "St", "Str", "Stre", "Strea", "Stream", "StreamH", "StreamHu", "StreamHub", "StreamHu", "StreamH", "Stream",
	"Strea", "Stre", "Str", "St", "S"

function loop() {
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}
