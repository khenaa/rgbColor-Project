alert("Welcome back Khena");

var numBoxes = 6;
var colors = generateRandomColors(numBoxes);

// selecting the six divs with class ="square"
var boxes = document.querySelectorAll(".boxes");
// selecting the rgbDisplay
var rgbDisplay = document.querySelector("#rgbDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#resetBtn");
var pickedColor = pickColor(); 
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

rgbDisplay.textContent = pickedColor;


// For easy button
easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numBoxes = 3;
	colors = generateRandomColors(numBoxes);
	pickedColor = pickColor();
	rgbDisplay.textContent = pickedColor;
	for(var i = 0; i < boxes.length; i++){
		if(colors[i]){
			boxes[i].style.backgroundColor = colors[i];
		} else{
			boxes[i].style.display = "none"; 
		}
	}	
});


// For hard button
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numBoxes = 6;
	colors = generateRandomColors(numBoxes);
	pickedColor = pickColor();
	rgbDisplay.textContent = pickedColor;
	for(var i = 0; i < boxes.length; i++){
		boxes[i].style.backgroundColor = colors[i];	
		boxes[i].style.display = "block";
	}	
});



resetBtn.addEventListener("click", function(){
	// generate all new colors
	colors = generateRandomColors(numBoxes);
	// pick an new color from array
	pickedColor = pickColor();
	// change rgbDsiplay to match picked color
	rgbDisplay.textContent = pickedColor;
	// change color of boxes
	for(var i = 0; i < boxes.length; i++){
		boxes[i].style.backgroundColor = colors[i];
	}	
	h1.style.backgroundColor = "steelblue";
	resetBtn.textContent = "New Colors";
	messageDisplay.textContent = "";
});

for(var i = 0; i < boxes.length; i++){
	// add initial colors to boxes
	boxes[i].style.backgroundColor = colors[i];
	// add click listeners to boxes
	boxes[i].addEventListener("click", function(){
		//grab the color of clicked box 
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor)
			h1.style.backgroundColor = clickedColor;
			resetBtn.textContent = "Play Again?";
		} else{
			messageDisplay.textContent = "Try again";
			this.style.backgroundColor = "#232323";
		}
	});
}


function changeColors(color){
	// loop through all boxes
	for(var i = 0; i < boxes.length; i++){
		// change each color to  match given colors
		boxes[i].style.backgroundColor = color ;	
	}
}

function pickColor(){
	//generate random numbers 4rm 0-5 
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]
}

function generateRandomColors(num){
	// make an arry
	var arr = []
	// repeat num times
	for(var i = 0; i < num; i++){
		// get random color and push into the array
		arr.push(randomColor())
	}
	// return that array
	return arr;
}

function randomColor(){
	// pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}