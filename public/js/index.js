var video = document.getElementById("showreel");
var soundToggleButton = document.getElementById("sound-toggle");

function toggleMute() {
  if (video.muted){
    video.muted = false;
    soundToggleButton.innerText = " ON";
    soundToggleButton.classList.remove("text-red-600");
    soundToggleButton.classList.add("text-neongreen");
  } else {
    video.muted = true;
    soundToggleButton.innerText = " OFF"
    soundToggleButton.classList.add("text-red-600");
    soundToggleButton.classList.remove("text-neongreen");
  }
}

soundToggleButton.onclick = function(event) { toggleMute(event) };
