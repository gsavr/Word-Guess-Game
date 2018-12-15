var words = ["microscope", "laboratory", "science", "atom", "brain", "heart", "mitochondria", "cells", "organelle", "organ", "erosion", "weathering", "conduction", "convection", "radiation"];

// to use for storing random answer
var wordAnswer = "";
//will split with random answer into an array with each letter as a value
var answerLettersArr = [];

// will count the number of blanks that will be shown
var numberSpaces = 0 ;
var blanks = [numberSpaces]
//will store incorrect answers
var badLetter= [];
//do I need another var?
//will store number of wins
var win = 0;
//shows turns left in game
var turnsLeft = 15;
// output to screen
var output = "";

var userChoice = ""; //key event

function Start(){
    output = "";
    document.getElementById("alreadyGuessed").innerHTML = "";
    turnsLeft=15;
    wordAnswer = words[Math.floor(Math.random() * words.length)];

    answerLettersArr = wordAnswer.split("");

    numberSpaces = answerLettersArr.length;

    // create loop to change element id to blanks
    for (var i=0; i < numberSpaces; i++)
    {
        blanks[i]=" _";
        output = output + blanks[i];
    }
    document.getElementById("currentWord").innerHTML =  output;
    output = "";
    
console.log(wordAnswer);
console.log(answerLettersArr);
console.log(numberSpaces);

}

Start()



//function to check whether key pressed is correct or not
document.onkeydown = function(event){
    var userChoice = event.key;
    
    output = "";
    for (var z = 0; z < answerLettersArr.length; z++) 
    {
          
        if(userChoice == answerLettersArr[z])
        { 
            console.log("you got a letter! " +  answerLettersArr[z] );

            blanks[z] = userChoice;
            numberSpaces--;
            console.log(userChoice);
            console.log(answerLettersArr[z])
        }
        output = output + blanks[z] + " ";
        
    }
    if(!wordAnswer.includes(userChoice))
        {   
            turnsLeft--;
            document.getElementById("numberGuesses").innerHTML = turnsLeft;
            //document.getElementById("alreadyGuessed").innerHTML = userChoice;
            badChoice()
            
        }
    
    document.getElementById("currentWord").innerHTML = output;
    

    console.log(turnsLeft);
    console.log("spaces left: " +numberSpaces);

    if (turnsLeft <1)
    {
    alert("You lose, the word was " + wordAnswer)
    Start();
    }

    if (numberSpaces <0)
    {
        win++;
        document.getElementById("win").innerHTML = win;
        alert("you win! The word was " + wordAnswer)
        Start();
    }
    console.log("wins : " + win);
    
    function badChoice(){
        var node = document.createElement("span");
        var badLetter = document.createTextNode(userChoice);
        node.appendChild(badLetter);
        document.getElementById("alreadyGuessed").appendChild(node);}
}

