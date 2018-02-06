
// Game Variables
let gamerTerms = [
    'achievement',
    'action-adventure',
    'actions per minute',
    'adventure game',
    'arcade game',
    'avatar',
    'balance',
    'bonus stage',
    'boss',
    'combo',
    'console',
    'coop',
    'cover system',
    'cross-platform',
    'crowd control',
    'cutscene',
];

let win = 0;
let loss = 0;
let highScore = [];
let wrongLetter = [];
let correctLetter = [];
let underScore = [];
let score = 0;
let randomNum = Math.floor(Math.random() * gamerTerms.length)
let randomWord = gamerTerms[randomNum]

console.log(randomWord);
//===================================
//Underscores === length of word
//===================================
let underScoreGen = () => {
    for(let i = 0; i < randomWord.length; i++){
        underScore.push('_')
    }
    return underScore;
}

console.log(underScoreGen())


//===================================
// Listener for keydown
//===================================
document.addEventListener('keydown', (event) => {
    keyname = event.key;
    //Check if guess is correct
    if (randomWord.indexOf(keyname) > -1) {
        correctLetter.push(keyname);
        console.log(correctLetter);
        underScore[randomWord.indexOf(keyname)] = keyname;
        if (underScore.join('') == randomWord) {
            score++
        }
    } else {
        wrongLetter.push(keyname)
        console.log(wrongLetter);
    }

console.log(score);
    
    // if(randomWord.indexOf(keyname) > -1) {
    //     correctLetter.push(keyname);
    //     underScore[randomWord.indexOf(keyname)] = keyname;
    //     console.log(keyname);
    //     if (underScore.join('') == randomWord) {
    //         altert('You win')
    //     } 
    // } else {
    //     wrngLttr.push(keyname)
    //     console.log(wrngLttr);
    // }
    // keysPressed.push(keyname);
    // let keyGuess = keysPressed.join('')
    // console.log(keyGuess);
  });


//===================================
//Compare randomWord to keyspressed array
//===================================

/*
2. Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!

3. Use key events to listen for the letters that your players will type.

4. Display the following on the page: 

5. Press any key to get started!

6. Wins: (# of times user guessed the word correctly).

   * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

   * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

7. Number of Guesses Remaining: (# of guesses remaining for the user).

8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

9. After the user wins/loses the game should automatically choose another word and make the user play it.

##### Hangman Game Bonuses

1. Play a sound or song when the user guesses their word correctly, like in our demo.
2. Write some stylish CSS rules to make a design that fits your game's theme.
3. **HARD MODE:** Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
4. Save your whole game and its properties in an object.
5. Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
6. Don't forget to place your global variables and functions above your object.
   * Remember: global variables, then objects, then calls.
7. Definitely talk with a TA or your instructor if you get tripped up during this challenge.
*/

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

let canvas;
let ctx;

setup = function() {
    canvas = document.getElementById('thecanvas');
    ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;
};

setup();

//Draw rect using a for loop and assign x,y values to variables depending on locations







// function testInput(event) {
//     var value = String.fromCharCode(event.which);
//     var pattern = new RegExp(/[a-zåäö ]/i);
//     return pattern.test(value);
//  }