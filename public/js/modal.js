var modal = document.getElementById("myModal");
var videoContainers = document.getElementsByClassName("video");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var myFunction = function() {
  this.firstElementChild.className = "w-full"; // make hidden video iframe appear
  var newHTML = this.firstElementChild.outerHTML; // save it's HTML
  this.firstElementChild.className = "hidden"; // hiding so it's not showing up behind the modal
  modal.firstElementChild.innerHTML = newHTML; // copy the HTML to the modal
  modal.style.display = "block"; // show the modal
};

for (var i = 0; i < videoContainers.length; i++) {
  videoContainers[i].addEventListener('click', myFunction, false);
}
