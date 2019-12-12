var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  xEditing = x += (lFollowX - x) * friction;
  yEditing = y += (lFollowY - y) * friction;

  xGrading = xEditing * 0.65
  yGrading = yEditing * 0.65

  translateEditing = 'translate(' + xEditing + 'px, ' + yEditing + 'px)';
  translateGrading = 'translate(' + xGrading + 'px, ' + yGrading + 'px)';

  let videosEditing = document.querySelectorAll('.video-editing');
  let videosGrading = document.querySelectorAll('.video-grading');

  Array.prototype.forEach.call(videosEditing, function(video, i){
    video.style.transform = translateEditing;
  });

  Array.prototype.forEach.call(videosGrading, function(video, i){
    video.style.transform = translateGrading;
  });

  window.requestAnimationFrame(moveBackground);
}

window.addEventListener('mousemove', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
  lFollowX = (14 * lMouseX) / 100;
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();
