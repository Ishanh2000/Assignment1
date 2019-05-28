// JavaScript source code
var h0 = 0.0;
var w0 = 0.0;
var H0 = 0.0;
var W0 = 0.0;
var xi = 0;
var yi = 0;
var toResize = false;

function load() {
    document.getElementById("tf1").style.width = "300px";
    imageSet();
}

function imageSet() {
    var today = new Date();
    if (today.getHours() <= 6 - 1 || today.getHours() >= 18) {
        document.getElementById("body").style.backgroundImage = "url('night.jpg')";
        document.getElementById("h1").style.color = "white";
        document.getElementById("h2").style.color = "white";
        document.getElementById("l1").style.color = "white";
        document.getElementById("fr1").style.border = "7px solid lightblue";
    }
}

function loadSite() {
    var site = document.getElementById("tf1").value;
    if (site == "") {
        site = "https://www.wikipedia.org";
    }
    document.getElementById("fr1").setAttribute("src", site);
}

function recordXY() {
    xi = event.clientX;
    yi = event.clientY;
    toResize = true;
    // document.write(xi + "<br>");
    // document.write(yi + "<br>");
    // document.write(xi + yi + "<br>");
}

function applyXY() {
    if (toResize == false) return;
    var xf = event.clientX;
    var yf = event.clientY;
    var frame1 = document.getElementById("fr1");
    var hfr1 = parseInt(frame1.getAttribute("height"));
    var wfr1 = parseInt(frame1.getAttribute("width"));
    //document.write(hfr2  + yf-yi);
    frame1.setAttribute("height", hfr1 + yf - yi);
    frame1.setAttribute("width", wfr1 + xf - xi);
    toResize = false;
}