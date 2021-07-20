
if(localStorage.clicks){
    var clicks = localStorage.getItem("clicks");
    document.getElementById("clicks").innerHTML = clicks;
} else {
    var clicks = 0
}
function c(){
    clicks++
    document.getElementById("clicks").innerHTML = clicks;
    console.log(document.getElementById("clicks").innerHTML);
    localStorage.setItem("clicks", clicks);
}
