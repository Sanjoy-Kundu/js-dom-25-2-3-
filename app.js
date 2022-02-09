//background blue
function makeBlue() {
	document.body.style.backgroundColor = "red";
}


function backgroundBlue() {
	document.body.style.backgroundColor = "blue";
}

//background Dodger Blue
const colorDodgerblue = document.getElementById("background-blue"); //catch button id
// console.log(colorDodgerblue);
colorDodgerblue.onclick = makeDodgerBlue; //set onclick function
function makeDodgerBlue() { //working with function
	document.body.style.backgroundColor = "dodgerblue";
}



//body background purple
const color = document.getElementById("purple-color"); //catch button id
console.log(color);
color.onclick = purpleColor; //set onclick the const color variable
function purpleColor() {
	document.body.style.backgroundColor = "purple";
}








//body background tomato
const bodyColor = document.getElementById("tomato");
console.log(bodyColor);
bodyColor.onclick = function () {
	document.body.style.backgroundColor = "tomato";
}





//add event listener
const colorYellow = document.getElementById("yellow");
colorYellow.addEventListener("click", function () {
	document.body.style.backgroundColor = "yellow";
});





//direct write with addEvent listener
document.getElementById("skyblue").addEventListener("click", function () {
	document.body.style.backgroundColor = "skyblue";
})




