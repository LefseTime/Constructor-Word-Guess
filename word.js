const Letter = require("./letter");

//split word from array(?) into letters (array of letters as strings)
    //let splitRandomWord = randomWord.split("");
    //  console.log(splitRandomWord);
//push each letter into Letter function
//log each Letter separately into array letters as objects

//function takes in randomWord from index(?)
function Word(randomWord) {
    var letterObjects = [];
    var guessLetter = process.argv[2];
    this.randomWord = randomWord;
    //split randomword into letters (array of each letter as string)
    this.splitRandomWord = randomWord.split("");
    //separate out each letter from array into wordLetter var (for each)
    for (i=0; i<this.splitRandomWord.length; i++ ) {
        letterObjects.push(new Letter(splitRandomWord[i],guessLetter,bool));
    };

    //splitRandomWord.forEach(letterObjects.push(new Letter(wordLetter)));
    console.log(letterObjects);

    // console.log(wordLetter);
    // //push each string in splitrandomword array into Letter function and log output of functioninto letterObjects
    // this.letterObjects.push(new Letter(wordLetter))





    // this.addLetter = function(wordLetter) {
    //     this.letterObjects.push(new Letter(wordLetter));
    //     letter.forEach(Letter());
    //     console.log(letters);
    // };
};

Word('kitty');

module.exports = Word;