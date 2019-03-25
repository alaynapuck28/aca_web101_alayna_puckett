
let clicker = document.getElementById('clicker');
// where the numbers are displayed
let counter = document.getElementById('counter');
// local storage to save the click count in the browser
const storage = window.localStorage;

let save = {};
// Object to save

// save the count in the browser 

function load() {
	if (storage.getItem("save")) {
		// display count
		counter.innerHTML = save.count;
	} else {
		save.count = 0;
		// Stay at "0" if no one clicks
		counter.innerHTML = "0";
	}
}
load();

// Functions will run upon "click" event

clicker.addEventListener("click", function () {
	save.count++;
	counter.innerHTML = save.count;
	if (save.count === 10) {
	  document.getElementById("counter").innerHTML = "Alexander Hamilton!";
	}
	if (save.count === 20) {
		document.getElementById("counter").innerHTML = "Andrew Jackson!";
	}
	if (save.count === 50) {
			document.getElementById("counter").innerHTML = "Ulysses S. Grant!";
	}
	if (save.count === 100) {
				document.getElementById("counter").innerHTML = "Benjamin Franklin!";
	  }
	if (save.count > 100) {
		document.getElementById("counter").innerHTML = "<p>That's enough</p>" + "<img src='images/nomoremoney.jpg' id='nomoremoney'>";
}
  });