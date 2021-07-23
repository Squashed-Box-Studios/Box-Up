var i = 0
const au = document.getElementById("audio")
if(localStorage.punches){
    var punches = Number(localStorage.getItem("punches"))
    document.getElementById("punches").innerHTML = punches;
} else {
    var punches = 0
    var deci = 0
}
if(localStorage.deci){
    var deci = Number(localStorage.getItem("deci"))
} else {
    var deci = 0
}
if(localStorage.interval){
    var interval = Number(localStorage.getItem("interval"))
} else {
    var interval = 1
}
if(localStorage.strength){
    var strength = Number(localStorage.getItem("strength"))
    document.getElementById("strength").innerHTML = strength;
} else {
    var strength = 0
}
if(localStorage.speed){
    var speed = Number(localStorage.getItem("speed"))
    document.getElementById("speed").innerHTML = speed;
} else {
    var speed = 0
}
function p(){
    if (i == 0){
        deci+= (strength / 100) + 1
        punches = Math.round(deci);
        document.getElementById("punches").innerHTML = punches;
        console.log(document.getElementById("punches").innerHTML);
        localStorage.setItem("punches", punches);
        localStorage.setItem("deci", deci);
        au.play();
        progress();
    }
}
function progress(){
    interval = (speed / 100) + 1
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
function st(strengthp, punchesm){
    if(punches >= punchesm){
        Number(strength+= strengthp)
        Number(deci-= punchesm)
        Number(punches = Math.round(deci))
        document.getElementById("punches").innerHTML = punches;
        localStorage.setItem("punches", punches);
        document.getElementById("strength").innerHTML = strength;
        localStorage.setItem("strength", strength);
    }
}
function sp(speedp, punchesm){
    if(punches >= punchesm){
        Number(speed+= speedp)
        Number(deci-= punchesm)
        Number(punches = Math.round(deci))
        document.getElementById("punches").innerHTML = punches;
        localStorage.setItem("punches", punches);
        document.getElementById("speed").innerHTML = speed;
        localStorage.setItem("speed", speed);
    }
}
