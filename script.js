var i = 0
const au = document.getElementById("audio")
if(localStorage.punches){
    var punches = localStorage.getItem("punches");
    document.getElementById("punches").innerHTML = punches;
} else {
    var punches = 0
}
if(localStorage.interval){
    var punches = localStorage.getItem("interval");
} else {
    var interval = 1
}
function p(){
    if (i == 0){
        punches++
        document.getElementById("punches").innerHTML = punches;
        console.log(document.getElementById("punches").innerHTML);
        localStorage.setItem("punches", punches);
        au.play();
        progress();
    }
}
function progress(){
    i = 1
    var bar = document.getElementById("bar");
    bar.style.backgroundColor = "#213781";
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        bar.style.backgroundColor = "#2eff69";
      } else {
        width+= interval;
        bar.style.width = width + "%";
      }
    }
}
