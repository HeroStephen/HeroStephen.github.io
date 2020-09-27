
//image selection
let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/Luxray.png'){
		myImage.setAttribute('src', 'images/Groudon.png');
	}
	else{
		myImage.setAttribute('src', 'images/Luxray.png');
	}
}

//display name at the top
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
  setUserName();
} 
else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = storedName;
}

function setUserName(){
	let myName = prompt('Please enter your name.');
	if(!myName) {
		setUserName();
	} 
	else {
		localStorage.setItem('name', myName);
		myHeading.textContent = myName;
	}
}

myButton.onclick = function() {
  setUserName();
}