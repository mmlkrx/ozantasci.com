//= require_tree .

document.addEventListener('click', function(e){
  e = e || window.event;
  if (e.target.parentElement.parentElement.parentElement.className === "nav") {
    list = e.target.parentElement.parentElement.children

    for (i in list) {
      if (i < 7) {
        list[i].firstChild.className = '';
      }
    }
    e.target.className = 'active';
  }
});
