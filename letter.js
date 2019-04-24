//letter.js

//should not require any other files.

//constructor Letter
var Letter = function(letter) {

   
    //string with the actual letter
    //created elsewhere 
    this.underlyLetter = letter;

    //guessed true/false 
    this.guessedLetter = false;

    //function display placeholder and guesses()
    this.displayLetter = function () {
        if (this.guessedLetter) {
            return this.underlyLetter; 
           
        }
        return "_";
    }    
    //function checkLetter (letter)
    this.checkLetter = function () {
        if (letter == underlyLetter) {
            this.guessedLetter = true;
        }
    }
};

module.exports = Letter;