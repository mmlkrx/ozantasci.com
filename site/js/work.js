var modal = document.getElementById("myModal");
var aboutPageContent = document.getElementById("about-content");
var imprintContent = document.getElementById("imprint-content");
var videoName = document.getElementById("video-name");

var allVideos = document.getElementsByClassName('video');
var editingVideos = document.getElementsByClassName('video-editing');
var gradingVideos = document.getElementsByClassName('video-grading');

var editingButton = document.getElementById("editing-btn");
var gradingButton = document.getElementById("grading-btn");
var ozzyButton = document.getElementById("ozzy-btn");
var aboutButton = document.getElementById("about-btn");
var imprintButton = document.getElementById("imprint-btn");

function playVideo(video) {
  video.play();
}

function handleMouseLeaveVideo(event) {
  event.target.style.removeProperty('z-index'); // remove inline z-index and default back to initial value set with z-{} class
  videoName.innerHTML = ''; // reset video display value to empty
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
  if (!(event.target.closest('.video') || event.target.closest('.close-btn'))) return; // if we don't click any of these special elements, don't do anything, if we do, continue with doing different things depending on the element
  if (event.target.closest('.video')) {
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

function showVideos(type) {
  switch(type) {
    case 'grading':
      // set videos to 100% brightness, remove inline z-index and allow play on hover
      for(var i=0; i < gradingVideos.length; i++) {
        gradingVideos[i].style.filter = "brightness(100%)";
        gradingVideos[i].style.removeProperty('z-index');
        let video = gradingVideos[i].querySelector('video');
        video.onmouseover = function() { playVideo(video) };
      }
      break;
    case 'editing':
      // set videos to 100% brightness, remove inline z-index and allow play on hover
      for(var i=0; i < editingVideos.length; i++) {
        editingVideos[i].style.filter = "brightness(100%)";
        editingVideos[i].style.removeProperty('z-index');
        let video = editingVideos[i].querySelector('video');
        video.onmouseover = function() { playVideo(video) };
      }
      break;
  }
}

function hideVideos(type) {
  switch(type) {
    case 'grading':
      // dim videos, add negative z-index, disable play on hover
      for(var i=0; i < gradingVideos.length; i++) {
        gradingVideos[i].style.filter = "brightness(15%)";
        gradingVideos[i].style.zIndex = -1;
        gradingVideos[i].querySelector('video').removeAttribute('onmouseover');
      }
      break;
    case 'editing':
      // dim videos, add negative z-index, disable play on hover
      for(var i=0; i < editingVideos.length; i++) {
        editingVideos[i].style.filter = "brightness(15%)";
        editingVideos[i].style.zIndex = -1;
        editingVideos[i].querySelector('video').removeAttribute('onmouseover');
      }
      break;
  }
}

editingButton.onclick = function(event) {
  switch(editingButton.classList.contains('active')) {
    case true:
      //remove active class
      editingButton.classList.remove("active");
      //show grading vids
      showVideos('grading');
      break;
    case false:
      //remove active class from grading button
      gradingButton.classList.remove("active");
      //add active class
      editingButton.classList.add("active");
      //hide grading videos
      hideVideos('grading');
      //show editing videos
      showVideos('editing');
      break;
  }
}

gradingButton.onclick = function(event) {
  switch(gradingButton.classList.contains('active')) {
    case true:
      //remove active class
      gradingButton.classList.remove("active");
      //show editing vids
      showVideos('editing');
      break;
    case false:
      //remove active class from editing button
      editingButton.classList.remove("active");
      //add active class
      gradingButton.classList.add("active");
      //hide editing videos
      hideVideos('editing');
      // show grading videos
      showVideos('grading');
      break;
  }
}

ozzyButton.onclick = function(event) {
  for(var i=0; i < allVideos.length; i++) {
    allVideos[i].style.filter = "brightness(100%)";
    allVideos[i].style.removeProperty('z-index');
    let video = allVideos[i].querySelector('video');
    video.onmouseover = function() { playVideo(video) };
  }
}

aboutButton.onclick = function(event) { triggerModal(event) };

imprintButton.onclick = function(event) { triggerModal(event) };
