// JavaScript source code

// try to make things rlevant with this code!

var h0 = 0.0;
var w0 = 0.0;
var H0 = 0.0;
var W0 = 0.0;

function load() {
    document.getElementById("tf1").style.width = "300px";
    imageSet();
    store();
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

function store() {
    H0 = parseFloat(window.innerHeight);
    W0 = parseFloat(window.innerWidth);
    var frame = document.getElementById("fr1");
    h0 = parseFloat(frame.getAttribute("height"));
    w0 = parseFloat(frame.getAttribute("width"));
}

function resize() {
    H = window.innerHeight;
    W = window.innerWidth;
    // similarity of rectangles in Euclidean geometry
    var h = parseInt((H * h0) / H0);
    var w = parseInt((W * w0) / W0);
    var frame = document.getElementById("fr1");
    frame.setAttribute("height", h);
    frame.setAttribute("width", w);
}

function loadSite() {
    var site = document.getElementById("tf1").value;
    if (site == "") {
        site = "https://www.wikipedia.org";
    }
    document.getElementById("fr1").setAttribute("src", site);
}