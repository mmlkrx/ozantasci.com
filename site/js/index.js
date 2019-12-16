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
    aboutPageContent.classList.add("flex");
    aboutPageContent.classList.remove("hidden");
    break;
  case imprintButton:
    imprintContent.classList.add("flex");
    imprintContent.classList.remove("hidden");
    break;
  }
}

document.addEventListener('click', function (event) {
  if (!(event.target.closest('.close-btn'))) return; // if we don't click any of these special elements, don't do anything, if we do, continue with doing different things depending on the element
  if (event.target.closest('.close-btn')) {
    aboutPageContent.classList.add("hidden");
    imprintContent.classList.add("hidden");
  }
}, false);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == aboutPageContent) {
    aboutPageContent.classList.add("hidden");
  } else if (event.target == imprintContent) {
    imprintContent.classList.add("hidden");
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

function hideSpinner() {
  document.getElementById("loading-spinner").style.display = "none";
}

video.addEventListener('canplaythrough', function() { hideSpinner() });

window.onkeyup = function(event) {
  event = event || window.event;
  if (event.key == "Escape") {
    imprintContent.classList.add("hidden");
    aboutPageContent.classList.add("hidden");
  }
};


var WindowWidth = window.innerWidth;

videoSourceMobile = document.createElement("source");
videoSourceMobile.src = 'videos/REEL_12_IPAD_RF26.mp4';
videoSourceMobile.type = 'video/mp4';

videoSourceDesktop = document.createElement("source");
videoSourceDesktop.src = 'videos/REEL_12_RF_26.mp4';
videoSourceDesktop.type = 'video/mp4';


if (WindowWidth < 1200) {
  video.appendChild(videoSourceMobile);
} else {
  video.appendChild(videoSourceDesktop);
}
