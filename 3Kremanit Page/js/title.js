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
	"K", "Kr", "Kre", "Krem", "Krema", "Kreman", "Kremani", "Kremanit",
	"Kremani", "Kreman", "Krema", "Krem", "Kre", "Kr", "K"
];

function loop() {
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}
