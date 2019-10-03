var modal = document.getElementById("myModal");
var aboutPageContent = document.getElementById("about-content");
var imprintContent = document.getElementById("imprint-content");
var websiteGate = document.getElementById("website-gate");
var videoName = document.getElementById("video-name");

function playVideo(video) {
  video.play();
}

document.addEventListener('click', function (event) {
  if (!(event.target.matches('#about-btn') || event.target.closest('.video') || event.target.closest('.close-btn') || event.target.closest('#editing-btn') || event.target.closest('#ozzy-btn') || event.target.closest('#grading-btn') || event.target.matches('#imprint-btn') || event.target.matches('#website-gate-btn'))) return; // if we don't click any of these special elements, don't do anything, if we do, continue with doing different things depending on the element
  if (event.target.matches('#about-btn')) {
    aboutPageContent.style.display = "flex";
    aboutPageContent.className = 'modal w-screen h-screen flex justify-center items-center text-white fixed top-0 z-70';
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
    imprintContent.style.display = "none";
  } else if (event.target.closest('#editing-btn')) {
    // reset editing videos back to 100% brightness and remove inline z-index
    let editingVideos = document.getElementsByClassName('video-editing');
    for(var i=0; i < editingVideos.length; i++) {
      editingVideos[i].style.filter = "brightness(100%)";
      editingVideos[i].style.removeProperty('z-index');
      let video = editingVideos[i].querySelector('video');
      video.onmouseover = function() { playVideo(video) };
    }
    // dim grading videos
    let gradingVideos = document.getElementsByClassName('video-grading');
    for(var i=0; i < gradingVideos.length; i++) {
      if (!gradingVideos[i].classList.contains('video-editing')) {
        gradingVideos[i].style.filter = "brightness(15%)";
        gradingVideos[i].style.zIndex = -1;
        gradingVideos[i].querySelector('video').removeAttribute('onmouseover');
      }
    }
  } else if (event.target.closest('#ozzy-btn')) {
    let allVideos = document.getElementsByClassName('video');
    for(var i=0; i < allVideos.length; i++) {
      allVideos[i].style.filter = "brightness(100%)";
      allVideos[i].style.removeProperty('z-index');
      let video = allVideos[i].querySelector('video');
      video.onmouseover = function() { playVideo(video) };
    }
  } else if (event.target.closest('#grading-btn')) {
    // reset grading videos back to 100% brightness
    let gradingVideos = document.getElementsByClassName('video-grading');
    for(var i=0; i < gradingVideos.length; i++) {
      gradingVideos[i].style.filter = "brightness(100%)";
      gradingVideos[i].style.removeProperty('z-index');
      let video = gradingVideos[i].querySelector('video');
      video.onmouseover = function() { playVideo(video) };
    }
    // dim editing videos
    let editingVideos = document.getElementsByClassName('video-editing');
    for(var i=0; i < editingVideos.length; i++) {
      if (!editingVideos[i].classList.contains('video-grading')) {
        editingVideos[i].style.filter = "brightness(15%)";
        editingVideos[i].style.zIndex = -1;
        editingVideos[i].querySelector('video').removeAttribute('onmouseover');
      }
    }
  } else if (event.target.matches('#imprint-btn')) {
    aboutPageContent.style.display = "none";
    imprintContent.style.display = "flex";
    imprintContent.className = 'modal z-70 fixed flex justify-center left-0 top-0 w-full h-full overflow-scroll';
  } else if (event.target.matches('#website-gate-btn')) {
    websiteGate.style.display = "none";
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

function handleMouseLeaveVideo(event) {
  event.target.style.removeProperty('z-index'); // remove inline z-index and default back to initial value set with z-{} class
  videoName.innerHTML = ''; // reset video display value to empty
}
