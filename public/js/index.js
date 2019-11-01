var video = document.getElementById("showreel");
var soundToggleButton = document.getElementById("sound-toggle");
var aboutButton = document.getElementById("about-btn");
var aboutPageContent = document.getElementById("about-content");
var imprintContent = document.getElementById("imprint-content");
var imprintButton = document.getElementById("imprint-btn");

function muteVideo() {
  if (video.muted){
    return;
  } else {
    video.muted = true;
    soundToggleButton.querySelector("#sound-on-off").innerText = " OFF"
    soundToggleButton.querySelector("#sound-on-off").classList.add("text-red-600");
    soundToggleButton.querySelector("#sound-on-off").classList.remove("text-neongreen");
  }
}

function toggleMute() {
  if (video.muted){
    video.muted = false;
    soundToggleButton.querySelector("#sound-on-off").innerText = " ON";
    soundToggleButton.querySelector("#sound-on-off").classList.remove("text-red-600");
    soundToggleButton.querySelector("#sound-on-off").classList.add("text-neongreen");
  } else {
    video.muted = true;
    soundToggleButton.querySelector("#sound-on-off").innerText = " OFF"
    soundToggleButton.querySelector("#sound-on-off").classList.add("text-red-600");
    soundToggleButton.querySelector("#sound-on-off").classList.remove("text-neongreen");
  }
}

function triggerModal(event) {
  switch(event.target) {
  case aboutButton:
    aboutPageContent.style.display = "flex";
    aboutPageContent.className = 'modal w-screen h-screen flex justify-center items-center text-white fixed top-0 z-70';
    break;
  case imprintButton:
    aboutPageContent.style.display = "none";
    imprintContent.style.display = "flex";
    imprintContent.className = 'modal z-70 fixed flex justify-center left-0 top-0 w-full h-full overflow-scroll';
    break;
  }
}

document.addEventListener('click', function (event) {
  if (!(event.target.closest('.close-btn'))) return; // if we don't click any of these special elements, don't do anything, if we do, continue with doing different things depending on the element
  if (event.target.closest('.close-btn')) {
    aboutPageContent.style.display = "none";
    imprintContent.style.display = "none";
  }
}, false);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == aboutPageContent) {
    aboutPageContent.style.display = "none";
  }
}

var menus = document.getElementsByClassName("toggle-visibility");
var timedelay = 1;
var _delay = setInterval(delayCheck, 500);

function delayCheck() {
  if (timedelay == 3) {
    for(var i=0; i < menus.length; i++) {
      menus[i].classList.add("hide");
      menus[i].classList.remove("show");
    }
    timedelay = 1;
  }
  timedelay = timedelay + 1;
}

window.onmousemove = function() {
  for(var i=0; i < menus.length; i++) {
    menus[i].classList.add("show");
    menus[i].classList.remove("hide");
  }
  timedelay = 1;
  clearInterval(_delay);
  _delay = setInterval(delayCheck, 500);
}

aboutButton.addEventListener("click", function(event) { triggerModal(event) });
aboutButton.addEventListener("click", function() { muteVideo() });
imprintButton.addEventListener("click", function(event) { triggerModal(event) });
imprintButton.addEventListener("click", function() { muteVideo() });

soundToggleButton.onclick = function(event) { toggleMute(event) };
