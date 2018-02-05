// Game Variables
const keysPressed = [];
let highScore = [];
let score = 0;


let randWord = [];

// Display title of game
// Display high scores
    //input 
// Initiate a game
// Select a random word
    // Display corresponding number of blank spaces in canvas as length of word
// Take input from user
        //Compare input to random word letters
        // If correct display letter
        // else -1 number of guesses 
        // display guessed letter
    //if all letters of random word are guessed display you won message
        //add 1 to the score


//Styling the canvas

//Draw rect using a for loop and assign x,y values to variables depending on locations


var canvas;
var cntx;


window.onLoad = function draw() {
    console.log('Hello World')
    newFunction();
};



function draw() {
    canvas = document.getElementById('gameCanvas');
    cntx = canvas.getContext('2d', { alpha: false });
    cntx.fillStyle = 'black';
    cntx.fillRect(0, 0, canvas.width, canvas.height);
}
// function testInput(event) {
//     var value = String.fromCharCode(event.which);
//     var pattern = new RegExp(/[a-zåäö ]/i);
//     return pattern.test(value);
//  }