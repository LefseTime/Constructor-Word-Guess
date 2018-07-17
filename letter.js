//EET'S VERKING, EET'S VERKING!!!
//EET STOPPED VERKING, EET STOPPED VERKING!!!
//EET VERKS ONCE AGAIN!!
var Letter = function (wordLetter,guessLetter,bool) {
    this.guessLetter = guessLetter;
    this.wordLetter = wordLetter;
    this.bool = bool;

    this.updateBool = function (wordLetter, guessLetter, bool) {
        if (bool == true) {
            this.bool = true;
        }
        else if (bool == false) {
            if (wordLetter == guessLetter) {
                this.bool = true;
            }
            else {
                this.bool = false;
            };
        };
        return this.bool;
    };
    
    this.guessed = function (bool) {  
        if (bool) {
            return wordLetter;
        }
        else if (!bool) {
            return '_';
        }
    };

    //this.updateBool(this.wordLetter,this.guessLetter,this.bool);
    //this.guessed(this.bool);
    //console.log(this.guessed(this.bool))
};

module.exports = Letter;

//letters = [{Letter(wordLetter,bool,(updatebool,guessed))},{Letter}]