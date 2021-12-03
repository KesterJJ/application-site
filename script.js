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


function lighten() {
one.style.backgroundColor = "#aaaaaa";
two.style.backgroundColor = "#aaaaaa";
three.style.backgroundColor = "#aaaaaa";
}

function darken() {
one.style.backgroundColor = "#888888";
two.style.backgroundColor = "#888888";
three.style.backgroundColor = "#888888";
}

function moveLeft() {
two.style.transform = "translate(-50px)";
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
menuButton.setAttribute("onclick", "turnLines()");
writing.style.transitionDelay = "0s";
title.style.transitionDelay = "0s";
writing.style.opacity = "0";
title.style.opacity = "0";
left.style.transitionDelay = "0s";
right.style.transitionDelay = "0s";
left.style.width = "30%";
right.style.width = "30%";
heading.style.textShadow = "2px 2px 2px #333333";
menu.getElementsByClassName("buttons")[0].style.transitionDelay = "0.6s";
menu.getElementsByClassName("buttons")[1].style.transitionDelay = "0.6s";
menu.getElementsByClassName("buttons")[2].style.transitionDelay = "0.6s";
menu.getElementsByClassName("buttons")[3].style.transitionDelay = "0.6s";
menu.getElementsByClassName("buttons")[0].style.top = "500px";
menu.getElementsByClassName("buttons")[1].style.top = "500px";
menu.getElementsByClassName("buttons")[2].style.top = "500px";
menu.getElementsByClassName("buttons")[3].style.top = "500px";
}

function moveCentre() {
two.style.transform = "translate(0px)";
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
menuButton.setAttribute("onclick", "turnCross()");
writing.style.transitionDelay = "0.5s";
title.style.transitionDelay = "0.5s";
writing.style.opacity = "1";
title.style.opacity = "1";
left.style.transitionDelay = "0.5s";
right.style.transitionDelay = "0.5s";
left.style.width = "0px";
right.style.width = "0px";
heading.style.textShadow = "none";
menu.getElementsByClassName("buttons")[0].style.transitionDelay = "0s";
menu.getElementsByClassName("buttons")[1].style.transitionDelay = "0s";
menu.getElementsByClassName("buttons")[2].style.transitionDelay = "0s";
menu.getElementsByClassName("buttons")[3].style.transitionDelay = "0s";
menu.getElementsByClassName("buttons")[0].style.top = "0px";
menu.getElementsByClassName("buttons")[1].style.top = "0px";
menu.getElementsByClassName("buttons")[2].style.top = "0px";
menu.getElementsByClassName("buttons")[3].style.top = "0px";
}