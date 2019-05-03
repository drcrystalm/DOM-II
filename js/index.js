// Your code goes here

//MOUSEOVER
const navStuff = document.querySelectorAll(`nav a`);
navStuff[0].addEventListener(`mouseover`, event => {
  navStuff[0].style.color = `pink`
});
navStuff[1].addEventListener(`mouseover`, event => {
  navStuff[1].style.color = `green`
});
navStuff[2].addEventListener(`mouseover`, event => {
  navStuff[2].style.color = `orange`
});
navStuff[3].addEventListener(`mouseover`, event => {
  navStuff[3].style.color = `blue`
});



const myNav = document.querySelector("h1");
console.log(myNav);
myNav.addEventListener("mouseover", (event) => {
  // highlight the mouseover target
  myNav.style.color = "yellow";
});


//KEYDOWN
const keyDown = document.querySelector("input");

document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }

  console.log("Keydown activated");
});



// This also works, and is straight from the example off of Mozilla

// const input = document.querySelector('input');

// document.addEventListener('keydown', logKey);

// function logKey(e) {
//   log.textContent += ` ${e.code}`;
// }


//WHEEL this is straight from Mozilla example as well, I still don 't understand the zoom setting very well. 
const wheel = document.querySelector(".intro p");
wheel.addEventListener('wheel', zoom);

function zoom(event) {
  event.preventDefault();

  if (event.deltaY < 0) {
    // Zoom in
    scale *= event.deltaY * -2;
  } else {
    // Zoom out
    scale /= event.deltaY * 2;
  }

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);

  // Apply scale transform
  wheel.style.transform = `scale(${scale})`;
}

let scale = 1;
wheel.onwheel = zoom;

//I like this example better, because it sets a specific font instead of the zoom, but I did not make this one, I saw this one online.
// const wheelIt = document.querySelector(`.home p`);
// wheelIt.addEventListener(`wheel`, e => {
//   wheelIt.style.fontFamily = `Amatic SC`, `cursive`;
//   wheelIt.style.fontSize = `10em`
// });

//LOAD side note, you do not need to declare a variable for window. 

window.addEventListener('load', (event) => {
  console.log('Page is fully loaded - this is my LOAD event:)');
});


//FOCUS- taken from W3 schools and Mozilla. Have only seen it used w an input box, so I'm adding an input box.

// const myFocus = document.getElementById("focus");
// myFocus.addEventListener('focus', myFunction);
// function myFunction() {
//   myFocus.style.backgroundColor = "red";
// }

//SELECT-
const elem = document.getElementById("test");
elem.addEventListener(
  "select",
  e => {
    alert(e.target.value);
  },
  false
);