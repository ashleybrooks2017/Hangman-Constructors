
var Word = require("./word.js");
var letter = require("./letter.js");
var inquirer = require("inquirer");


var wordBank = ["element", "javascript", "package", "console", "function", "this", "syntax", "boolean", "operator", "concatenation", "properties", "values", "methods", "documentation"];
var guessesRemaining = 9;
var currentWord = new Word(wordBank[Math.floor(Math.random() * wordBank.length)]);

console.log("");
console.log("let's play Coding terminology hangman!");
console.log("---------------------------------------------");

function game() {
    console.log(currentWord.showWord());
    console.log("");

    
    let prompt = (
        inquirer.prompt([{
            type: "input",
            message: "Guess letter.",
            name: "userGuessletter"

        }]).then(function(userResponse) {
            let userletter = userResponse.userGuessletter
            currentWord.checkletter(userletter);

if (currentWord.valid) {
    console.log("****************************************");
    console.log("You've already guessed this letter, guess again.");
    game();
                
            } else {
                if (currentWord.isWordCompleted()) {
                    console.log("------------------------------------------");
                    console.log("You Win! The word is " + currentWord.showWord());
                    console.log("------------------------------------------");
                    
                    reset();
                    newPrompt();


                } else if (guessesRemaining === 0) {
                    console.log("---------------------------------");
                    console.log("Sorry, you are out of guesses.");
                    console.log("---------------------------------");
                    
                    reset();
                    newPrompt();
                } else {
                    console.log("********************************");
                    console.log("You have " + guessesRemaining + " guesses left!");
                    console.log("Already guessed: " + currentWord.guesses);

                    guessesRemaining--;
                    game();
                }
            }

        })
    );
};
game();


    function newGame() {
    (
        inquirer.prompt(
            [{
                type: "list",
                message: "Want to play again?",
                choices: ["Yes", "No"],
                name: "anotherRound"

            }]
           
        ).then(function(info) {
            if (info.anotherRound === "Yes") {
                newGame();
                
            } else {
                console.log("");
                console.log("-------------------------------");
                console.log("Thanks for Playing!");
                console.log("-------------------------------");
                console.log("");
            }
        })
    )
};

function newGame() {
        if (guessesRemaining > 0) {
        game();
    }   else {
        console.log("Sorry, you have no guesses left.");
        reset();
        newGame();
    }
};


function reset() {
            guessesRemaining = 9;
            currentWord = new Word(wordBank[Math.floor(Math.random() * wordBank.length)]);

};