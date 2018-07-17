const Word = require("./word");
const Inquirer = require("inquirer");

//console.log(randomWord);

//run Word function on random word to log letters into array with false booleans
//Word(randomWord);

//console log spaces
let randomWord;
function generateWord() {
    //array of words
    let wordArr = ['cutlass', 'parrot', 'treasure','mast','spyglass','eyepatch','grog','plank','skull','bullion','cannon','rats','blunderbuss','mermaid'];
    let randomNumber = Math.floor(Math.random() * wordArr.length);
    return randomWord = wordArr[randomNumber];
}


let letterObjects = [];

console.log(`☠️  Yarrr, landlubber! I be Cap'n Coderbones, Scourge o' the Seven Seas, 'n here be me pirate guessing game. Guess what be aboard me pirate ship (don't be greedy now, scallywag, one letter at a time!), or ye'll be meetin' a watery grave, yarrrrrrr...`)
generateWord();
inquire = function (letterObjects) {

    Inquirer.prompt([
        {
            type: "input",
            message: "☠️   Guess me booty, filthy bilge rat!",
            name: "guess"
        }
    ]).then(function (response) {
        if (response.guess.length > 1) {
            console.log(`🔪   One letter at a time, ye soft-skulled knave!`)
            return inquire(letterObjects);
        }

            Word(randomWord, response.guess, letterObjects);
        //console.log(letterObjects.length)
        for (i = 0; i < letterObjects.length; i++) {
            //console.log(letterObjects[i].bool)
            //if statement for if all true
            if (letterObjects[i].bool == false) {
                return inquire(letterObjects);
            }
            else {
            };
        };
        console.log(`🧜‍♀️‍  Yarrr, ye've avoided yer fate fer now, rapscallion. Let's see how ye take this next one, yarrr!`)
        letterObjects = [];
        generateWord();


        //console.log(Word(randomWord,response.guess,letterObjects));
        //Word(randomWord,response.guess);
        // if (!guessedLetters[0]) {
        //     console.log(response.guess)
        //     guessedLetters.push(response.guess)
        // }
        // else {
        //     for (let i = 0; i < guessedLetters.length; i++) {
        //         console.log(response.guess);
        //         console.log(guessedLetters[i]);
        //         if (response.guess == guessedLetters[i]) {
        //             console.log(`Letter already guessed.`);
        //             return inquire();
        //         }
        //         else {
        //             guessedLetters.push(response.guess);
        //         };
        //     };
        // };
        //console.log(letterObjects)
        inquire(letterObjects);
    });
};
inquire(letterObjects);