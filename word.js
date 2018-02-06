var Letter = require("./letter.js");
var Word = function(letters) {
    
this.lettersArray = [];   
this.guesses = [];
this.guessesRemaining = 9;
this.findLetter = function() {

        
        for (var i = 0; i < letters.length; i++) {
            var individualLetter = new Letter(letters[i]);
            this.lettersArray.push(individualLetter);
        }
    };
    this.findLetter();
};

Word.prototype.checkLetter = function(param) {
    this.notCorrect = true;
    this.valid = false;
    var param = param.toLowerCase();
    if (this.guesses.indexOf(param) != -1) {
        this.valid = true;
    } else {
    

        this.guesses.push(param);
        for (var i = 0; i < this.lettersArray.length; i++) {
            if (this.lettersArray[i].character == param) {
                this.notCorrect = false;
                this.lettersArray[i].show = true
            }
        }
        if (this.notCorrect) {
            this.guessesRemaining--;
        }
    }
};

Word.prototype.showWord = function() {
    let display = "";
    for (var i = 0; i < this.lettersArray.length; i++) {
        display += this.lettersArray[i].renderLetter();
    }
    return display;
};

Word.prototype.isWordCompleted = function() {
    for (var i = 0; i < this.lettersArray.length; i++) {

        if (this.lettersArray[i].show === false) {
            return false;
        }
    }
    return true;
};

module.exports = Word;