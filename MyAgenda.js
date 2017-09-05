// Create a "close" button and append it to each item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	}
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
	var ul = document.getElementById("myUL");

	var myInputValue = document.getElementById("myInput").value;
    document.getElementById("myInput").value = "";

	if (myInputValue === '') {
		alert("You must write something!");
		return
	}

	var li = document.createElement("LI");
	var t = document.createTextNode(myInputValue);
	li.appendChild(t);

	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	span.onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	}

	li.appendChild(span);
	ul.appendChild(li);
}