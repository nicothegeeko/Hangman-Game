//list of words for game 

var wordList = [
    "mario",
    "luigi",
    "yoshi",
    "link",
    "samus",
    "kirby",
    "fox",
    "pikachu",
    "jigglypuff",
    "ness",
    "peach",
    "bowser",
    "zelda",
    "sheik",
    "ganondorf",
    "falco",
    "mewtwo",
    "pichu",
    "marth",
    "roy"
];

//variables used throughout game
var word = "";
var letterInword = [];
var blanks = 0;
var correctLetters = [];
var wrongLetters = [];

var winningScore = 0;
var losingScore = 1;
var guessesLeft = 10;


function startGame() {
    
    //fills in blanks for game

    word = wordList[Math.floor(Math.random() * wordList.length)];
    lettersInword = word.split("");
    blanks = lettersInword.length;
    console.log(word);
    console.log(blanks)

    wrongLetters = [];
    console.log("Sorry you guessed incorrectly", wrongLetters);
    guessesLeft = 10;
    correctLetters = [];

    for (var i = 0; i < blanks; i++) {
        correctLetters.push("_");
    }
    console.log(correctLetters);
    document.getElementById('word-blank').innerHTML = correctLetters.join(" ");
    document.getElementById('num-guesses').innerHTML = guessesLeft;


}

//loops for checking that correct inputs are typed
function checkLetters(letter) {
    

    var letterInWord = false;

    for (var i = 0; i < blanks; i++) {
        if (word[i] === letter) {
            letterInWord = true;

        }
    }

    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (word[i] === letter) {
                correctLetters[i] = letter;
            }

        }
    } else {
        guessesLeft--;
        wrongLetters.push(letter)
    }


}

function Winner()
{alert("Player One Wins!!");
 startGame();
}
//basic html features and scorekeeping
function stageComplete() {
   

    document.getElementById('word-blank').innerHTML = correctLetters.join(" ");
    document.getElementById('num-guesses').innerHTML = guessesLeft;
    document.getElementById('wrong-guesses').innerHTML = wrongLetters.join(" ");


    console.log(lettersInword);
    console.log(correctLetters);
    if (lettersInword.join(" ") === correctLetters.join(" ")) {
        winningScore++;
        document.getElementById('win-counter').innerHTML = winningScore;
        startGame();
        window.setTimeout( Winner, 1000 );
    } else if (guessesLeft === 0) {
        document.getElementById('loss-counter').innerHTML = losingScore++;
        document.getElementById('wrong-guesses').innerHTML = "";
        alert("Sorry no more moves left!");
        startGame();
    }


}
//check user inputs
startGame();
document.onkeyup = function(event) {
    
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("letter typed by user", letterGuessed)
    checkLetters(letterGuessed)
    stageComplete();


}
