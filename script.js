var menuButton = document.getElementById("menuButton");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var writing = document.getElementById("writing");
var title = document.getElementById("title");
var right = document.getElementById("right");
var left = document.getElementById("left");
var heading = document.getElementById("heading");
var menu = document.getElementById("menu");
var gallery = document.getElementById("gallery");
var challenges = document.getElementById("challenges");
var feature = document.getElementById("feature");
var about = document.getElementById("about");
var contact = document.getElementById("contact");



//brightens the menu button onmousover
function lighten() {
one.style.backgroundColor = "#aaaaaa";
two.style.backgroundColor = "#aaaaaa";
three.style.backgroundColor = "#aaaaaa";
}
//darkens it
function darken() {
one.style.backgroundColor = "#888888";
two.style.backgroundColor = "#888888";
three.style.backgroundColor = "#888888";
}

function brighten(option) {
option.style.color = "#aaaaaa";
}

function unbrighten(option) {
option.style.color = "#888888";
}

//moves the middle piece out of the menu button
function moveLeft() {
two.style.transform = "translate(-50px)";
}

function fadeOut() {
    writing.style.transitionDelay = "0s";
    title.style.transitionDelay = "0s";
    writing.style.opacity = "0";
    title.style.opacity = "0";
}

function wingsIn() {
    left.style.transitionDelay = "0s";
    right.style.transitionDelay = "0s";
    left.style.width = "30%";
    right.style.width = "30%";
    heading.style.textShadow = "2px 2px 2px #333333";
}

function turnCross() {
    one.style.transition = "transform 0.5s";
one.style.transform = "rotate(45deg) translate(5px, 16px)";
three.style.transition = "transform 0.3s";
three.style.transform = "rotate(-45deg) translate(5px, -16px)";
two.style.transform = "translate(10px)";
setTimeout(moveLeft, 100);
two.style.transition = "transform 0.175s, opacity 0.5s";
two.style.opacity = "0";
}

function openMenu() {
turnCross();
menuButton.setAttribute("onclick", "closeMenu()");
fadeOut();
wingsIn();
dropMenu();
}


//moves the centre piece back into the menu button
function moveCentre() {
two.style.transform = "translate(0px)";
}


function dropMenu() {
    menu.getElementsByClassName("buttons")[0].style.transitionDelay = "0.2s";
    menu.getElementsByClassName("buttons")[1].style.transitionDelay = "0.2s";
    menu.getElementsByClassName("buttons")[2].style.transitionDelay = "0.2s";
    menu.getElementsByClassName("buttons")[3].style.transitionDelay = "0.2s";
    menu.getElementsByClassName("buttons")[0].style.top = "500px";
    menu.getElementsByClassName("buttons")[1].style.top = "500px";
    menu.getElementsByClassName("buttons")[2].style.top = "500px";
    menu.getElementsByClassName("buttons")[3].style.top = "500px";
}

function liftMenu() {
    menu.getElementsByClassName("buttons")[0].style.transitionDelay = "0s";
    menu.getElementsByClassName("buttons")[1].style.transitionDelay = "0s";
    menu.getElementsByClassName("buttons")[2].style.transitionDelay = "0s";
    menu.getElementsByClassName("buttons")[3].style.transitionDelay = "0s";
    menu.getElementsByClassName("buttons")[0].style.top = "0px";
    menu.getElementsByClassName("buttons")[1].style.top = "0px";
    menu.getElementsByClassName("buttons")[2].style.top = "0px";
    menu.getElementsByClassName("buttons")[3].style.top = "0px";
}

//delays links so animation can take place
function delay(URL) {
    setTimeout( function() { window.location = URL }, 1000 );
}

function fadeInStart() {
    writing.style.opacity = "1";
    title.style.opacity = "1";
}

function fadeIn() {
    writing.style.transitionDelay = "0.5s";
    title.style.transitionDelay = "0.5s";
fadeInStart();
}

function wingsOut() {
    left.style.transitionDelay = "0.15s";
    right.style.transitionDelay = "0.15s";
    left.style.width = "0px";
    right.style.width = "0px";
    heading.style.textShadow = "none";
}

function turnLines() {
    one.style.transition = "transform 0.25s";
    one.style.transform = "rotate(0deg) translate(0px, 0px)";
    three.style.transition = "transform 0.25s";
    three.style.transform = "rotate(0deg) translate(0px, 0px)";
    two.style.transform = "translate(10px)";
    two.style.transition = "transform 0.25s, opacity 0.25s";
    setTimeout(moveCentre, 250);
    two.style.opacity = "1";
}

function closeMenu() {
turnLines();
menuButton.setAttribute("onclick", "openMenu()");
fadeIn();
wingsOut();
liftMenu();
}

function linkClick() {
    turnLines();
menuButton.setAttribute("onclick", "openMenu()");
wingsOut();
liftMenu();
}