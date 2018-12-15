var words = ["microscope", "laboratory", "science", "atom", "brain", "heart", "mitochondria", "cells", "organelle", "organ", "erosion", "weathering", "conduction", "convection", "radiation"];

// to use for storing random answer
var wordAnswer = "";
//will split with random answer into an array with each letter as a value
var answerLettersArr = [];

// will count the number of blanks that will be shown
var numberSpaces = 0 ;
var blanks = [numberSpaces]
//will store incorrect answers
var wrongLetter= [];
//do I need another var?
//will store number of wins
var win = 0;
//shows turns left in game
var turnsLeft = 10;
// output to screen
var output = "";

var userChoice = ""; //key event

function Start(){
    wordAnswer = words[Math.floor(Math.random() * words.length)];

    answerLettersArr = wordAnswer.split("");//dont need this for it to work but then I cannot have the letters separated

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
           
        }
        output = output + blanks[z] + " ";
    }
    
    document.getElementById("currentWord").innerHTML = output;
    output = "";
    turnsLeft--;

    console.log(output)
}
                
          
            