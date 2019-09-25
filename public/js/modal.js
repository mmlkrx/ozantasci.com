var modal = document.getElementById("myModal");
var videoContainers = document.getElementsByClassName("video");
var aboutPageContent = document.getElementById("about-content");
var aboutButton = document.getElementById("about-btn");
var closeButton = document.getElementById("close-btn");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == aboutPageContent) {
    aboutPageContent.style.display = "none";
  }
  if (event.target == closeButton) {
    modal.style.display = "none";
    aboutPageContent.style.display = "none";
  }
}

var myFunction = function() {
  if (this.firstElementChild.classList.contains("video-portrait")) {
    this.firstElementChild.className = "block video-portrait"
    var newHTML = this.firstElementChild.outerHTML; // save it's HTML
    this.firstElementChild.className = "hidden video-portrait"; // hiding so it's not showing up behind the modal
    modal.firstElementChild.innerHTML = newHTML; // copy the HTML to the modal
    modal.style.display = "flex"; // show the modal
  } else {
    this.firstElementChild.className = "block"; // make hidden video iframe appear
    var newHTML = this.firstElementChild.outerHTML; // save it's HTML
    this.firstElementChild.className = "hidden"; // hiding so it's not showing up behind the modal
    modal.firstElementChild.innerHTML = newHTML; // copy the HTML to the modal
    modal.style.display = "flex"; // show the modal
  }
};

var aboutPage = function() {
  aboutPageContent.style.display = "flex";
  aboutPageContent.className = 'modal w-screen h-screen flex justify-center items-center text-white absolute top-0';
};

for (var i = 0; i < videoContainers.length; i++) {
  videoContainers[i].addEventListener('click', myFunction, false);
}

aboutButton.addEventListener('click', aboutPage, false);