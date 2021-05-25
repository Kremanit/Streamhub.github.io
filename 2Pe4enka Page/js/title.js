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
	setInterval(loop, 400);
}

var x = 0;
var titleText = [
	"P", "Pe", "Pe4", "Pe4e", "Pe4en", "Pe4enk", "Pe4enka", "Pe4enk",
	"Pe4en", "Pe4e", "Pe4", "Pe", "P"
];

function loop() {
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}
