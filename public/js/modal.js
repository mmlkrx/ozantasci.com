var modal = document.getElementById("myModal");
var aboutPageContent = document.getElementById("about-content");
var videoName = document.getElementById("video-name");

document.addEventListener('click', function (event) {
  if (!(event.target.matches('#about-btn') || event.target.closest('.video') || event.target.closest('.close-btn') || event.target.closest('#editing-btn') || event.target.closest('#ozzy-btn') || event.target.closest('#grading-btn'))) return; // if we don't click any of these special elements, don't do anything, if we do, continue with doing different things depending on the element
  if (event.target.matches('#about-btn')) {
    aboutPageContent.style.display = "flex";
    aboutPageContent.className = 'modal w-screen h-screen flex justify-center items-center text-white absolute top-0 z-70';
  } else if (event.target.closest('.video')) {
    if (event.target.parentElement.firstElementChild.classList.contains('video-portrait')) {
      event.target.parentElement.firstElementChild.className = "block video-portrait"
      var newHTML = event.target.parentElement.firstElementChild.outerHTML; // save it's HTML
      event.target.parentElement.firstElementChild.className = "hidden video-portrait"; // hiding so it's not showing up behind the modal
      modal.firstElementChild.innerHTML = newHTML; // copy the HTML to the modal
      modal.style.display = "flex"; // show the modal
    } else {
      event.target.parentElement.firstElementChild.className = "block"; // make hidden video iframe appear
      var newHTML = event.target.parentElement.firstElementChild.outerHTML; // save it's HTML
      event.target.parentElement.firstElementChild.className = "hidden"; // hiding so it's not showing up behind the modal
      modal.firstElementChild.innerHTML = newHTML; // copy the HTML to the modal
      modal.style.display = "flex"; // show the modal
    }
  } else if (event.target.closest('.close-btn')) {
    modal.style.display = "none";
    aboutPageContent.style.display = "none";
  } else if (event.target.closest('#editing-btn')) {
    // reset editing videos back to 100% brightness
    let editingVideos = document.getElementsByClassName('video-editing');
    for(var i=0; i < editingVideos.length; i++) {
      editingVideos[i].style.filter = "brightness(100%)";
    }
    // dim grading videos
    let gradingVideos = document.getElementsByClassName('video-grading');
    for(var i=0; i < gradingVideos.length; i++) {
      if (!gradingVideos[i].classList.contains('video-editing')) {
        gradingVideos[i].style.filter = "brightness(15%)";
      }
    }
  } else if (event.target.closest('#ozzy-btn')) {
    let allVideos = document.getElementsByClassName('video');
    for(var i=0; i < allVideos.length; i++) {
      allVideos[i].style.filter = "brightness(100%)";
    }
  } else if (event.target.closest('#grading-btn')) {
    // reset grading videos back to 100% brightness
    let gradingVideos = document.getElementsByClassName('video-grading');
    for(var i=0; i < gradingVideos.length; i++) {
      gradingVideos[i].style.filter = "brightness(100%)";
    }
    // dim editing videos
    let editingVideos = document.getElementsByClassName('video-editing');
    for(var i=0; i < editingVideos.length; i++) {
      if (!editingVideos[i].classList.contains('video-grading')) {
        editingVideos[i].style.filter = "brightness(15%)";
      }
    }
  }
}, false);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    event.target.firstElementChild.innerHTML = ""; // remove iframe in case user clicks play and closes the modal
    modal.style.display = "none";
  }
  if (event.target == aboutPageContent) {
    aboutPageContent.style.display = "none";
  }
}
