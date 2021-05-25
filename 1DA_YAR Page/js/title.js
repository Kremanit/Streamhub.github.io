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
	setInterval(loop, 300);
}

var x = 0;
var titleText = [
	"D", "DA", "DA_", "DA_Y", "DA_YA",
	"DA_YAR", "DA_YA", "DA_Y", "DA_", "DA", "D"
];

function loop() {
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}
