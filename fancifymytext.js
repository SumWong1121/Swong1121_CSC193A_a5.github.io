function btn() {
	alert("Hello,world!");
	document.getElementById("Text").style.fontSize = "24pt";
}

function achange() {
	alert("you select FancyShmancy!");
	document.getElementById("Text").style.fontWeight = "bold";
	document.getElementById("Text").style.color = "blue";
	document.getElementById("Text").style.textDecoration = "underline";
}

function unchange() {
	alert("you select BoringBetty!");
	document.getElementById("Text").style.fontWeight = "normal";
	document.getElementById("Text").style.color = "black";
	document.getElementById("Text").style.textDecoration = "none";
}

function moo() {
	var str = document.getElementById("Text").value;
	var parts = str.split(" ");
	str = parts.join("_");
	document.getElementById("Text").value = str;
}