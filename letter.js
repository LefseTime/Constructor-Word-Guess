//EET'S VERKING, EET'S VERKING!!!
//EET STOPPED VERKING, EET STOPPED VERKING!!!
//want to pass in stored boolean from array (if doesn't exist, default false), then return new boolean and update array
//boolean problem: how to pass in stored boolean if it exists, but false if it doesn't without overwriting one that already exists and may be true
var Letter = function (wordLetter,guessLetter,bool) {
    this.guessLetter = guessLetter;
    this.wordLetter = wordLetter;
    if (!bool) {
        this.bool = false;
    }
    else {
    this.bool = bool;
    };
    updateBool = function (wordLetter, guessLetter, bool) {
        if (bool) {
            return this.bool = true;
        }
        else if (!bool) {
            if (wordLetter == guessLetter) {
                return this.bool = true;
            }
            else {
                return this.bool = false;
            };
        };
    };
    guessed = function (bool) {
        if (bool) {
            return wordLetter;
        }
        else {
            return '_';
        }
    };

    updateBool(this.wordLetter, this.guessLetter);
    guessed(this.bool);
    //testing stuff (comment out/delete later)
    console.log(this.guessLetter);
    console.log(this.wordLetter);
    console.log(this.bool);
    console.log(guessed(this.bool));
};

module.exports = Letter;

//letters = [{Letter(wordLetter,bool,updatebool,guessed)},{Letter}]