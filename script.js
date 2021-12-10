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

//variables above for MENU FUNCTION


//Variables below here are for PROJECT GALLERY

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

//variables above for PROJECT GALLERY




//variables below are for the CHALLENGES

var capitaliseKeys = document.getElementById("capitalise-keys");
var checkLength = document.getElementById("check-length");
var checkType = document.getElementById("check-type");
var addAndMultiply = document.getElementById("add-and-multiply");
var goingShopping = document.getElementById("going-shopping");
var greetUser = document.getElementById("greet-user");
var mapObject = document.getElementById("map-object");
var oddOrEven = document.getElementById("odd-or-even");
var returnLarger = document.getElementById("return-larger");
var squaringANumber = document.getElementById("squaring-a-number");
var stringToObject = document.getElementById("string-to-object");
var sumOfElements = document.getElementById("sum-of-elements");
var sumOfPositive = document.getElementById("sum-of-positive");
var sumOfTwoNumbers = document.getElementById("sum-of-two-numbers");

//variables above are for the CHALLENGES





//variables below are for the ABOUT page

let article = document.getElementById("article");
let writing2 = document.getElementById("writing2");
let writing3 = document.getElementById("writing3");
let writing4 = document.getElementById("writing4");
let writing5 = document.getElementById("writing5");
let writing6 = document.getElementById("writing6");
let writing7 = document.getElementById("writing7");
let writing8 = document.getElementById("writing8");

//variables above for ABOUT page




//variables below for FEATURE

let cardCount = document.getElementById("cardCount");
let options = document.getElementById("options");

//variables above for FEATURE





// Everything below here controls the MENU FUNCTION and pages structure


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
    title.style.opacity = "0";
        container.style.transitionDelay = "0s";
        container.style.opacity = "0";
        container.style.zIndex = "-2";
        if (title.innerHTML == "FEATURE") {
            options.style.transitionDelay = "0s";
        options.style.opacity = "0";
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
    menu.style.height = "100%";
    menu.style.transitionDelay = "0.2s";
}

function liftMenu() {
    menu.style.zIndex = -20;
    menu.style.transitionDelay = "0s";
    menu.style.height = "300%";
}



fadeInStart = () => {
    writing.style.opacity = "1";
    title.style.opacity = "1";
        container.style.opacity = "1";
        if (title.innerHTML == "FEATURE") {
            options.style.opacity = "1";
        }
}

fadeIn = () => {
    writing.style.transitionDelay = "0.5s";
    title.style.transitionDelay = "0.5s";
        container.style.transitionDelay = "0.5s";
        container.style.zIndex = "11";
        if (title.innerHTML == "FEATURE") {
            options.style.transitionDelay = "0.5s";
        options.style.zIndex = "12";
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


//above here is for the PROJECT GALLERY


//Below here is code for the feature

if (title.innerHTML == "FEATURE") {

let cardBox = document.getElementById("cardBox");
let deckBack = document.getElementById("deckBack");
let back = document.getElementById("back");
let card = document.getElementById("card");
let suits = ["clubs", "spades", "diamonds", "hearts"];
let deck = [];
let removedCards = [];

//creates the deck
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

//choses random number between max and min inclusive
randomNumber = (max, min) => {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}


showCard = () => {
    setTimeout(function() {card.style.zIndex = 3;}, 250);
    back.style.transform = "rotateY(180deg)";
    card.style.transform = "rotateY(-180deg)";
}

hideCard = () => {
    setTimeout(function() {card.style.zIndex = 1;}, 250);
back.style.transform = "rotateY(0deg)";
card.style.transform = "rotateY(0)";
}


//The next few functions do the shuffle animation
moveCardsRight = () => deckBack.style.left ="50%";

moveCardsLeftDown = () => {
deckBack.style.zIndex = 0;
deckBack.style.left = "0px";
}

moveCardsLeftUp = () => {
    deckBack.style.zIndex = 4;
    deckBack.style.left = "0px";
}

moveCards = () => {
moveCardsRight();
setTimeout(function() {moveCardsLeftUp()}, 100);
setTimeout(function() {moveCardsRight()}, 200);
setTimeout(function() {moveCardsLeftDown()}, 300);
setTimeout(function() {moveCardsRight()}, 400);
setTimeout(function() {moveCardsLeftUp()}, 500);
setTimeout(function() {moveCardsRight()}, 600);
setTimeout(function() {moveCardsLeftDown()}, 700);
setTimeout(function() {moveCardsRight()}, 800);
setTimeout(function() {moveCardsLeftUp()}, 900);
setTimeout(function() {moveCardsRight()}, 1000);
setTimeout(function() {moveCardsLeftDown()}, 1100);
}


//deals with the actual shuffle function
shuffle = () => {

    let newDeck = [];
    for (let i = 0; i < deck.length; i += 0) {
    let randomNo = randomNumber(deck.length - 1, 0);
    let removed = deck.splice(randomNo, 1);
    newDeck.push(removed[0]);
    }
    deck = newDeck;
    card.src = `img/${deck[0]}.png`
}
shuffleDeck = () => {
    hideCard();
    setTimeout(function() { shuffle(); }, 500);
    setTimeout(function() {moveCards()}, 500);
    
}

//Takes away the image of the card if there aren't any left
removeBacks = () => {
    if (deck.length < 2) {
        deckBack.style.opacity = 0;
    }
        back.style.opacity = 0;
        card.style.opacity = 0;

}

//moves the cards back into the pile
includeCards = () => {
back.style.transition = "transform 0.5s linear, left 0s";
card.style.transition = "transform 0.5s linear, left 0s";
back.style.left = "0px";
card.style.left = "0px";
if (deck.length >= 1) {
back.style.opacity = 1;
card.style.opacity = 1;
}
}


//moves the top card to the right and makes it fade out
removeCard = () => {
    if (deck.length > 0) {
    removedCard = deck.shift();
    removedCards.push(removedCard);
    console.log(removedCards);
    card.src = `img/${deck[0]}.png`;
    removeBacks();
    countCards();
    }
}

//returns the image of the back of the card to the bottom of the deck
returnDeckBack = () => {
    deckBack.style.transition = "opacity 0s, left 0s";
    deckBack.style.left = "0px";
    if (deck.length > 1) {
        deckBack.style.opacity = 1;
    }
    setTimeout(function() {deckBack.style.transition = "left 0.1s";}, 500);
}

//fades the back of the deck image after it moves right 
fadeCardOut = () => {
    deckBack.style.opacity = 0;
    deckBack.style.transition = "opacity 0.25s, left 0s";
    setTimeout(function() {returnDeckBack()}, 250);
}

//moves the back of the deck image to the right
moveCardOut = () => {
    deckBack.style.transition = "left 0.25s";
    deckBack.style.left = "50%"
    setTimeout(function() {fadeCardOut()}, 500);
}

//removes chosen suit from the deck and does animation
removeSuit = (suit) => {
    let removed;
    for (let i = 0; i < deck.length; i++) {
        if (deck[i].includes(`${suit}`)) {
            moveCardOut();
            removed = deck.splice(i, 1);
            removedCards.push(removed[0]);
            i--
        }

    }
    card.src = `img/${deck[0]}.png`;
    countCards();
    removeBacks();
    includeCards();
    console.log(removedCards);
}

//var removeC = removeCard();
/*var removeSClubs = removeSuit('clubs');
const removeSSpades = removeSuit('spades');
const removeSDiamonds = removeSuit('diamonds');
const removeSHearts = removeSuit('Hearts');*/

//removes top card
takeAway = () => {
    back.style.transition = "transform 0.5s linear, left 0.5s";
card.style.transition = "transform 0.5s linear, left 0.5s";
    back.style.left = "50%";
    card.style.left = "50%";

    setTimeout(function() {removeCard()}, 1000);
    setTimeout(function() {includeCards()}, 1000);
    hideCard();
}

//Below here deals with putting cards back into the deck




takeInLast = () => {
    if (removedCards.length > 0) {
    moveCardIn();
    setTimeout(function() {retrieveLastCard()}, 500);
    hideCard();
    }
}

takeInRandom = () => {
    if (removedCards.length > 0) {
    moveCardIn();
    setTimeout(function() {retrieveRandomCard()}, 500);
    hideCard();
    }
}

takeInBottom = () => {
    if (removedCards.length > 0) {
    moveCardIn();
    setTimeout(function() {retrieveBottomCard()}, 500);
    hideCard();
    }
}

retrieveBacks = () => {
    if (deck.length >= 2) {
        deckBack.style.opacity = 1;
    }
    if (deck.length >= 1) {
        back.style.opacity = 1;
        card.style.opacity = 1;
    }
}

retrieveLastCard = () => {
    let retrieved = removedCards.pop();
    deck.unshift(retrieved);
    card.src = `img/${deck[0]}.png`;
    retrieveBacks();
    countCards();
}

retrieveBottomCard = () => {
    if (removedCards.length > 0) {
    let retrieved = removedCards.shift();
    deck.unshift(retrieved);
    card.src = `img/${deck[0]}.png`;
    retrieveBacks();
    countCards();
    }
}

retrieveRandomCard = () => {
    if (removedCards.length > 0) {
        let randomNo = randomNumber(removedCards.length - 1, 0);
    let retrieved = removedCards.splice(randomNo, 1);
    deck.unshift(retrieved[0]);
    card.src = `img/${deck[0]}.png`;
    retrieveBacks();
    countCards();
    }
    console.log(deck);
    console.log(removedCards);
}


//returns the image of the back of the card to the bottom of the deck
returnDeckBackIn = () => {
    deckBack.style.transition = "opacity 0s, left 0.25s";
    deckBack.style.left = "0px";
    setTimeout(function() {deckBack.style.transition = "left 0.1s";}, 250);
}

//fades in the back of the deck image after it moves right 
fadeCardIn = () => {
    deckBack.style.opacity = 1;
    deckBack.style.transition = "opacity 0.25s, left 0.25s";
    setTimeout(function() {returnDeckBackIn()}, 250);
}

//makes the bottom card image invisible and moves it to the right
moveCardIn = () => {
    deckBack.style.transition = "opacity 0s, left 0s";
    deckBack.style.opacity = 0;
    deckBack.style.left = "50%"
    setTimeout(function() {fadeCardIn();}, 1)
}



//retrieves chosen suit
retrieveSuit = (suit) => {
    let retrieved;
    for (let i = 0; i < removedCards.length; i++) {
        if (removedCards[i].includes(`${suit}`)) {
            retrieved = removedCards.splice(i, 1);
            deck.push(retrieved[0]);
            moveCardIn();
            i--
        }

    }
    card.src = `img/${deck[0]}.png`;
    countCards();
    retrieveBacks();
}

countCards = () => {
    cardCount.innerHTML = `Cards: ${deck.length}`;
}


pushDeck();
card.src = `img/${deck[0]}.png`


}

//Above here deals with FEATURE

//Below here deals with the writing on the ABOUT page

if (title.innerHTML == "ABOUT") {

let para = document.getElementById("para");
article.removeChild(writing2);
article.removeChild(writing3);
article.removeChild(writing4);
article.removeChild(writing5);
article.removeChild(writing6);
article.removeChild(writing7);
article.removeChild(writing8);

let k = 1;


fadeOutAndIn = (current, brandNew) => {
    article.removeChild(current);
    article.appendChild(brandNew);
    brandNew.style.transition = "opacity 0s";
    brandNew.style.opacity = 0;
    setTimeout(function() {fadeBackIn(brandNew)}, 801);
}

fadeBackIn = (brandNew) => {
    brandNew.style.transition = "opacity 0.8s";
    brandNew.style.opacity = 1;
}

next = () => {
    if (k < 8) {
        if (k == 1) {
            writing.style.opacity = 0;
            writing2.style.opacity = 0;
        setTimeout(function() {fadeOutAndIn(writing, writing2)}, 800);
        


        } else if (k == 2) {
            writing2.style.opacity = 0;
            setTimeout(function() {fadeOutAndIn(writing2, writing3)}, 800);
            } else if (k == 3) {
                writing3.style.opacity = 0;
                setTimeout(function() {fadeOutAndIn(writing3, writing4)}, 800);
                } else if (k == 4) {
                    writing4.style.opacity = 0;
                    setTimeout(function() {fadeOutAndIn(writing4, writing5)}, 800);
                    } else if (k == 5) {
                        writing5.style.opacity = 0;
                        setTimeout(function() {fadeOutAndIn(writing5, writing6)}, 800);
                        } else if (k == 6) {
                            writing6.style.opacity = 0;
                            setTimeout(function() {fadeOutAndIn(writing6, writing7)}, 800);
                            } else if (k == 7) {
                                writing7.style.opacity = 0;
                                setTimeout(function() {fadeOutAndIn(writing7, writing8)}, 800);
                                }
                k++;
    }
para.innerHTML = `${k}/8`;
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
                } else if (k == 5) {
                    writing5.style.opacity = 0;
                    setTimeout(function() {fadeOutAndIn(writing5, writing4)}, 800);
                    } else if (k == 6) {
                        writing6.style.opacity = 0;
                        setTimeout(function() {fadeOutAndIn(writing6, writing5)}, 800);
                        } else if (k == 7) {
                            writing7.style.opacity = 0;
                            setTimeout(function() {fadeOutAndIn(writing7, writing6)}, 800);
                            } else if (k == 8) {
                                writing8.style.opacity = 0;
                                setTimeout(function() {fadeOutAndIn(writing8, writing7)}, 800);
                                }
                k--;
    }
para.innerHTML = `${k}/8`;
}



}

//Above here deals with the writing in the ABOUT page

//Below deals with CHALLENGES
runChallenge = (project) => {
    if (projectOpen == true) {
        closeChallenge(project1);
    }
 project.style.width = "100%";
 projectOpen = true;
 project1 = project;
 }
 
 closeChallenge = (project1) => {
 project1.style.width = "45%";
 }