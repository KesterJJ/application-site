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

//Variables below here are for Project Gallery
var container = document.getElementById("container");
var lolCat = document.getElementById("lolCat");
var tipCalculator = document.getElementById("tipCalculator");
var burly = document.getElementById("burlyHerd");
var numberizor = document.getElementById("numberizor");
var passwordCreator = document.getElementById("passwordCreator");
var passW = document.getElementById("passW");
var lolC = document.getElementById("lolC");
var numB = document.getElementById("numB");
var tipC = document.getElementById("tipC");
var passWURL = "https://kesterjj.github.io/password-creator/";
var numBURL = "https://kesterjj.github.io/numberizor/";
var lolCURL = "https://kesterjj.github.io/lolcat-clock/";
var tipCURL = "https://kesterjj.github.io/tip-calculator/";

var projectOpen = false;
var project1;
var image1;
var obj1;


var obj = document.createElement("object");
obj.type = "text/html";
obj.width = "100";
obj.height = "500";

//variables above for project gallery

//variables below are for the ABOUT page

let article = document.getElementById("article");
let writing2 = document.getElementById("writing2");
let writing3 = document.getElementById("writing3");
let writing4 = document.getElementById("writing4");
let articleBox = document.getElementById("articleBox");





// Everything below here until the ending comment controls the MENU FUNCTION and pages structure


//delays links so animation can take place
function delay(URL) {
    setTimeout( function() { window.location = URL }, 900 );
}

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
    if (title.innerHTML == "ABOUT") {
        writing2.style.transitionDelay = "0s";
        writing3.style.transitionDelay = "0s";
        writing4.style.transitionDelay = "0s";
        articleBox.style.transitionDelay = "0s";
    writing2.style.opacity = "0";
    writing3.style.opacity = "0";
    writing4.style.opacity = "0";
    articleBox.style.opacity = "0";
    }
    title.style.opacity = "0";

    if (title.innerHTML == "PROJECT GALLERY") {
        container.style.transitionDelay = "0s";
        container.style.opacity = "0";
        container.style.zIndex = "-2";
    }
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
    menu.style.zIndex = 20;
    menu.getElementsByClassName("buttons")[0].style.transitionDelay = "0.2s";
    menu.getElementsByClassName("buttons")[1].style.transitionDelay = "0.2s";
    menu.getElementsByClassName("buttons")[2].style.transitionDelay = "0.2s";
    menu.getElementsByClassName("buttons")[3].style.transitionDelay = "0.2s";
    menu.getElementsByClassName("buttons")[0].style.top = "55%";
    menu.getElementsByClassName("buttons")[1].style.top = "55%";
    menu.getElementsByClassName("buttons")[2].style.top = "55%";
    menu.getElementsByClassName("buttons")[3].style.top = "55%";
}

function liftMenu() {
    menu.style.zIndex = -20;
    menu.getElementsByClassName("buttons")[0].style.transitionDelay = "0s";
    menu.getElementsByClassName("buttons")[1].style.transitionDelay = "0s";
    menu.getElementsByClassName("buttons")[2].style.transitionDelay = "0s";
    menu.getElementsByClassName("buttons")[3].style.transitionDelay = "0s";
    menu.getElementsByClassName("buttons")[0].style.top = "0px";
    menu.getElementsByClassName("buttons")[1].style.top = "0px";
    menu.getElementsByClassName("buttons")[2].style.top = "0px";
    menu.getElementsByClassName("buttons")[3].style.top = "0px";
}



fadeInStart = () => {
    writing.style.opacity = "1";
    if (title.innerHTML == "ABOUT") {
    writing2.style.opacity = "1";
    writing3.style.opacity = "1";
    writing4.style.opacity = "1";
    articleBox.style.opacity = "1";
    }
    title.style.opacity = "1";

    if (title.innerHTML == "PROJECT GALLERY") {
        container.style.opacity = "1";
    }
}

fadeIn = () => {
    writing.style.transitionDelay = "0.5s";
    if (title.innerHTML == "ABOUT") {
   writing2.style.transitionDelay = "0.5s";
    writing3.style.transitionDelay = "0.5s";
   writing4.style.transitionDelay = "0.5s";
    articleBox.style.transitionDelay = "0.5s";
    }
    title.style.transitionDelay = "0.5s";

    if (title.innerHTML == "PROJECT GALLERY") {
        container.style.transitionDelay = "0.5s";
        container.style.zIndex = "11";
    }
fadeInStart();
}


wingsOut = () => {
    left.style.transitionDelay = "0.15s";
    right.style.transitionDelay = "0.15s";
    left.style.width = "0px";
    right.style.width = "0px";
    heading.style.textShadow = "none";
}

turnLines = () => {
    one.style.transition = "transform 0.25s";
    one.style.transform = "rotate(0deg) translate(0px, 0px)";
    three.style.transition = "transform 0.25s";
    three.style.transform = "rotate(0deg) translate(0px, 0px)";
    two.style.transform = "translate(10px)";
    two.style.transition = "transform 0.25s, opacity 0.25s";
    setTimeout(moveCentre, 250);
    two.style.opacity = "1";
}

 closeMenu = () => { 
     turnLines();
     menuButton.setAttribute("onclick", "openMenu()");
     fadeIn();
     wingsOut();
     liftMenu();
}

linkClick = () => {
    turnLines();
    menuButton.setAttribute("onclick", "openMenu()");
    wingsOut();
    liftMenu();
}


//Everything above here is the menu and page structure/effects




//Below here deals with Projects Gallery:

runProject = (project, image, URL) => {
   if (projectOpen == true) {
       closeProject(project1, image1,obj1);
   }
project.style.width = "100%";
project.removeChild(image);
obj.data = URL;
project.appendChild(obj);
projectOpen = true;
project1 = project;
image1 = image;
obj1 = obj;
}

closeProject = (project1, image1, obj1) => {
project1.style.width = "45%";
project1.removeChild(obj1);
project1.appendChild(image1);
}





//Below here is code for the feature

if (title.innerHTML == "FEATURE") {

let cardBox = document.getElementById("cardBox");
let deckBack = document.getElementById("deckBack");
let back = document.getElementById("back");
let card = document.getElementById("card");
let suits = ["clubs", "spades", "diamonds", "hearts"];
let deck = [];
let removedCards = [];

pushDeck = () => {
    for (let i = 0; i < suits.length; i++) {
    for (let j = 1; j < 14; j++) {
if (j == 1) {
    deck.push(`ace_of_${suits[i]}`);
} else if (j == 11) {
    deck.push(`jack_of_${suits[i]}`);
  } else if (j == 12) {
        deck.push(`queen_of_${suits[i]}`);
    } else if (j == 13) {
        deck.push(`king_of_${suits[i]}`);
    } else {
        deck.push(`${j}_of_${suits[i]}`);
    }
}
}
return deck;
}


randomNumber = (max, min) => {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}


showCard = () => {
    card.style.zIndex = 3;
    console.log(deck[0]);
}

hideCard = () => card.style.zIndex = 1;

shuffle = () => {
    hideCard();
    let newDeck = [];
    for (let i = 0; i < deck.length; i += 0) {
    let randomNo = randomNumber(deck.length - 1, 0);
    let removed = deck.splice(randomNo, 1);
    newDeck.push(removed[0]);
    }
    deck = newDeck;
    card.src = `img/${deck[0]}.png`
}


//delays links so animation can take place
function delayShowCard() {
    setTimeout(showCard(), 2000);
}



pushDeck();
card.src = `img/${deck[0]}.png`


}



//Below here deals with the writing on the About page

if (title.innerHTML == "ABOUT") {

let para = document.getElementById("para");
article.removeChild(writing2);
article.removeChild(writing3);
article.removeChild(writing4);

let k = 1;


fadeOutAndIn = (current, brandNew) => {
    article.removeChild(current);
    article.appendChild(brandNew);
    //brandNew.style.transition = "opacity 1.6s";
    brandNew.style.opacity = 1;
}

next = () => {
    if (k < 4) {
        if (k == 1) {
            writing.style.opacity = 0;
        setTimeout(function() {fadeOutAndIn(writing, writing2)}, 800);
        } else if (k == 2) {
            writing2.style.opacity = 0;
            setTimeout(function() {fadeOutAndIn(writing2, writing3)}, 800);
            } else if (k == 3) {
                writing3.style.opacity = 0;
                setTimeout(function() {fadeOutAndIn(writing3, writing4)}, 800);
                }
                k++;
    }
para.innerHTML = `${k}/4`;
}

previous = () => {
    if (k > 1) {
        if (k == 2) {
            writing2.style.opacity = 0;
            setTimeout(function() {fadeOutAndIn(writing2, writing)}, 800);
        } else if (k == 3) {
            writing3.style.opacity = 0;
            setTimeout(function() {fadeOutAndIn(writing3, writing2)}, 800);
            } else if (k == 4) {
                writing4.style.opacity = 0;
                setTimeout(function() {fadeOutAndIn(writing4, writing3)}, 800);
                }
                k--;
    }
para.innerHTML = `${k}/4`;
}



}

//Above here deals with the writing in the ABOUT page
