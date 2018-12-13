var words = ["microscope", "laboratory", "science", "atom", "brain", "heart", "mitochondria", "cells", "organelle", "organ", "erosion", "weathering", "conduction", "convection", "radiation"];

// to use for storing random answer
var wordAnswer = "";
//will split with random answer into an array with each letter as a value
var answerLettersArr = [];

// will count the number of blanks that will be shown
var numberSpaces = 0 ;
var blanks = []
//will store array of incorrect answers
var wrongLetter= [];
//do I need another var?
//will store number of wins
var win = 0;
//shows turns left in game
var turnsLeft = 10;

function Start(){
    wordAnswer = words[Math.floor(Math.random() * words.length)];

    answerLettersArr = wordAnswer.split("");//dont need this for it to work but then I cannot have the letters separated

    numberSpaces = answerLettersArr.length;

    // create loop to change element id to blanks
    for (var i=0; i < numberSpaces; i++){
        blanks.push("_");
        document.getElementById("currentWord").innerHTML = " " + blanks.join("");
    }
console.log(wordAnswer);
console.log(answerLettersArr);
console.log(numberSpaces);
console.log(blanks.join(" "))
}

Start()

document.onkeydown = function(event) {
   var userInput = event.key;
   var letterInWord = false;
   /* if (userInput = answerLettersArr[i]) {
   console.log("you got one") */
   for (var i = 0; i < blanks; i++) {
    if (userInput == answerArray) {
        letterInWord = true;
        console.log("got one")
}}
}