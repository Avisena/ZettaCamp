
var modal = document.getElementById("explorewinter");
var modal2 = document.getElementById("exploreeastern");


var btn = document.getElementById("tombolwinter");
var btn2 = document.getElementById("tomboleastern");
 
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
 else if (event.target == modal2) {
    modal2.style.display = "none";
  }
}