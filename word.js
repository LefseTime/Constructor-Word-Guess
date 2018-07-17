const Letter = require("./letter");

//function takes in randomWord from index(?)
function Word(randomWord,guessLetter,letterObjects) {
    this.letterObjects = letterObjects;
    this.guessLetter = guessLetter;
    this.randomWord = randomWord;
    //split randomword into letters (array of each letter as string)
    this.splitRandomWord = randomWord.split("");
    let newLetter = {};
    
    //if no stuff in letterObjects
    //separate out each letter from array into wordLetter var (for each)
    if (!letterObjects[0]) {
        let display = [];
        for (i = 0; i < this.splitRandomWord.length; i++) {
            var bool = false;
            newLetter = new Letter(this.splitRandomWord[i], guessLetter, bool);
            newLetter.updateBool(this.splitRandomWord[i],guessLetter,bool);
            letterObjects.push(newLetter);
            bool = letterObjects[i].bool;
            newLetter.guessed(bool)
            //console.log(newLetter.guessed(bool))
            display.push(newLetter.guessed(bool));

            
        };
        for (i=0;i<display.length;i++) {
            console.log(display.splice(i).join(" "))
            console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
            //return(display.splice(i).join(" "));
        }
        return letterObjects;
    }
    //if stuff in letterObjects
    else if (letterObjects[0]) {
        let display2 = [];
        for (i = 0; i < this.splitRandomWord.length; i++) {
            var bool = letterObjects[i].bool;
            //console.log(bool)
            //newLetter = new Letter(this.splitRandomWord[i], guessLetter, bool);
            letterObjects[i].updateBool(this.splitRandomWord[i],guessLetter,bool);
            //letterObjects = {};
            //letterObjects.push(letterObjects[]);
            bool = letterObjects[i].bool;
            letterObjects[i].guessed(bool);
            //console.log(newLetter.guessed(bool))
            display2.push(letterObjects[i].guessed(bool));
        };
        for (i=0;i<display2.length;i++) {
            console.log(display2.splice(i).join(" "))
            console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
            //return(display.splice(i).join(" "));
        }
        return letterObjects;
    };
    //console.log(letterObjects)
    //return letterObjects;
    //splitRandomWord.forEach(letterObjects.push(new Letter(wordLetter)));
    //console.log(letterObjects);
    //console.log(newLetter.guessed(bool));

    // console.log(wordLetter);
    // //push each string in splitrandomword array into Letter function and log output of functioninto letterObjects
    // this.letterObjects.push(new Letter(wordLetter))





    // this.addLetter = function(wordLetter) {
    //     this.letterObjects.push(new Letter(wordLetter));
    //     letter.forEach(Letter());
    //     console.log(letters);
    // };
};

//Word('kitty',process.argv[2]);

module.exports = Word;