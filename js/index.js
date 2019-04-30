// Your code goes here
const myNav = document.querySelectorAll(".nav");
console.log(myNav);
myNav.addEventListener("mouseover", function(event) {
  // highlight the mouseover target
  event.target.style.color = "white";
});


//keydown
eventTarget.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    // do something
  });