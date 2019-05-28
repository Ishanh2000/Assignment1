// JavaScript source code
// JavaScript source code
var h0 = 0.0;
var w0 = 0.0;
var H0 = 0.0;
var W0 = 0.0;

function load() {
    document.getElementById("tf3").style.width = "300px";
    imageSet();
}

function imageSet() {
    var today = new Date();
    if (today.getHours() <= 6 - 1 || today.getHours() >= 18) {
        document.getElementById("body").style.backgroundImage = "url('night.jpg')";
        document.getElementById("h1").style.color = "white";
        document.getElementById("l1").style.color = "white";
        document.getElementById("l2").style.color = "white";
        document.getElementById("l3").style.color = "white";
        document.getElementById("h2_1").style.color = "white";
        document.getElementById("h2_2").style.color = "white";
        document.getElementById("sp1").style.color = "white";
        document.getElementById("sp2").style.color = "white";
        document.getElementById("fr1").style.border = "7px solid lightblue";

    }
}

function resize() {
    var h = parseInt(document.getElementById("tf1").value);
    var w = parseInt(document.getElementById("tf2").value);
    var frame = document.getElementById("fr1");
    frame.setAttribute("height", h);
    frame.setAttribute("width", w);
}

function loadSite() {
    var site = document.getElementById("tf3").value;
    if (site == "") {
        site = "https://www.wikipedia.org";
    }
    document.getElementById("fr1").setAttribute("src", site);
}