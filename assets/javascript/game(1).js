var words = ["microscope", "laboratory", "science", "atom", "brain", "heart", "mitochondria", "cells", "organelle", "organ", "erosion", "weathering", "conduction", "convection", "radiation"];

// to use for storing random answer
var wordAnswer = "";
//will split with random answer into an array with each letter as a value
var answerLettersArr = [];

// will count the number of blanks that will be shown
var numberSpaces = 0 ;
var blanks = []
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



//function to check whether key pressed is correct or not
document.onkeydown = function(event){
    var userChoice = event.key;
    
    output = "";
    for (var z = 0; z < answerLettersArr.length; z++) 
    {
        //alert(answerLettersArr[z]);    
        if(userChoice == answerLettersArr[z]){ 
            
            console.log("you got a letter! " +  answerLettersArr[z] );

            blanks.push(userChoice);
            //answerLettersArr.push(userChoice);
            //document.getElementById("currentWord").innerHTML = answerLettersArr[z];

            //rightChoice();
        }
        output = output + display[z] + " ";
    }
    
    document.getElementById("currentWord").innerHTML = output;
    output = "";
    turnsLeft--;

    console.log(output)
}
                
          
            /* }
            else{
                
                //document.getElementById("alreadyGuessed").appendChild(wrongLetter);

                console.log("you don't have the same letter than the guesscomputer " +  answerLettersArr[z] );
                turnsLeft--;
                document.getElementById("numberGuesses").innerHTML = turnsLeft;
                document.getElementById("alreadyGuessed").innerhtml  = wrongLetter;
                wrongChoice();
                
            }
        }

    }; */

/* function rightChoice() {
    
}

function wrongChoice() {
    
    

    
    
    
    //write incorrect letter to html
}
 */