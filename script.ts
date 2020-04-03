var _this;
var maxChances= 6;

var gameController = {
    form: document.querySelector('form'),
    input: document.querySelector('[name="guess"]'),
    word: document.querySelector('.word'),
    chances: document.querySelector('.chances'),
    previousGuesses: document.querySelector('.previous-guesses'),
}

class HangingMan
{
    runGame:boolean 
    words: string[];
    word: any;
    displayString:any;
    chances:number;
    previousGuesses: string;

    constructor(runGame:boolean, words:string, word:any, displayString:any, chances:number, previousGuesses:string)
    {
        this.runGame = runGame;
        this.word = words;
        this.word = word;
        this.displayString = displayString;
        this.chances= chances;
        this.previousGuesses = previousGuesses
    }
/*
    this.setup = function () {
        // Reset the game back to a strating position
        gameController.previousGuesses.innerHTML = '';
        this.previousGuesses = [];
        this.chances = maxChances;
        this.displayString = '';
        // Get a new word
        var i = Math.floor(Math.random() * this.words.length);
        this.word = this.words[i];
        //How do we display enough empty spaces
        for (var i = 0; i < this.word.length; i++) this.displayString += '_'; //for loops do need {} braces IF we only have 1 line of code inside the loop. "this.displayString += '_';" is actually INSDE THE LOOP

        gameController.word.textContent = this.displayString;// get our value to show on screen
        gameController.chances.textContent = this.chances;// get our value to show on screen
        // get our values to show in console
        console.log(this.word);
    };
    */
}
/*function Hangman() {
    // properties
    this.runGame = true;
    this.words = ["TechCareer", "Teachers", "Students", "Computer", "Software", "Tech"];
    this.word = '';
    this.displayString = '';
    this.chances = maxChances;
    this.previousGuesses = [];

    //Methods
    this.run = function () {
        this.setup();
        _this = this;
        gameController.form.addEventListener('submit', this.guessLetter); //We can add the event listener to the form instead of the button becauses the button is type="submit"
    };

    this.setup = function () {
        // Reset the game back to a strating position
        gameController.previousGuesses.innerHTML = '';
        this.previousGuesses = [];
        this.chances = maxChances;
        this.displayString = '';
        // Get a new word
        var i = Math.floor(Math.random() * this.words.length);
        this.word = this.words[i];
        //How do we display enough empty spaces
        for (var i = 0; i < this.word.length; i++) this.displayString += '_'; //for loops do need {} braces IF we only have 1 line of code inside the loop. "this.displayString += '_';" is actually INSDE THE LOOP

        gameController.word.textContent = this.displayString;// get our value to show on screen
        gameController.chances.textContent = this.chances;// get our value to show on screen
        // get our values to show in console
        console.log(this.word);
    };


    this.guessLetter = function (event) {
        event.preventDefault();
        //Checked if the guessed lettr is in the word
        let letterOfWord = gameController.input.value;
         lowerLetters = letterOfWord.toLowerCase();

        var check = _this.previousGuesses.find(function (element) { return element === lowerLetters; });
        console.log(check);

        if (check == undefined) {
            _this.previousGuesses.push(lowerLetters);
        }

        if (_this.word.includes(lowerLetters)) {

            //Update the display string (showin the letters)
            for (var i = 0; i < _this.word.length; i++) {


                // Loop through each letter in our word, one by one
                var currentChar = _this.word.substr(i, 1);
                //If he current chaacter matches what we have guessed
                if (currentChar === lowerLetters) {
                    _this.displayString = //Slice the pieces that we need
                        _this.displayString.slice(0, i) +   // is grabbing al the underscores BEFORE our matched characters
                        currentChar + //
                        _this.displayString.slice(i + 1, _this.displayString.length);


                    // We still have to output our code to the browser
                    gameController.word.textContent = _this.displayString;


                }
            }

            // Has the word been completely solved?
            if (!gameController.word.textContent.includes('_')) {
                // Wins
                _this.win();
            }
        } else if (check == undefined) {
            // Letter is not in word
            //Burn one chance
            _this.chances--;
            //update user interface
            gameController.chances.textContent = _this.chances;

            if (_this.chances < 0) {
                _this.lose();
            }
        } else {
            alert("Duplicate guess letter cant be used! please change the letter");
        }
        //Check for Game Over

        gameController.input.value = '';
        gameController.previousGuesses.textContent = _this.previousGuesses;

    };


    this.win = function () {
        if (confirm(' You Win! Replay?')) {
            this.setup();
        }
    };

    this.lose = function () {
        if (confirm('OOps, You lose! Replay?')) {
            this.setup();
        }
    };
};

*/

//END OF FILE
var game = new Hangman();
game.run();