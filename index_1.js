// JavaScript source code
function imageSet() {
    var today = new Date();
    if (today.getHours() <= 6 - 1 || today.getHours() >= 18) {
        document.getElementById("body").style.backgroundImage = "url('night.jpg')";
        document.getElementById("h1").style.color = "white";
        document.getElementById("fr1").style.border = "7px solid lightblue";
    }
}