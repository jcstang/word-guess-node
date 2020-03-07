// const Word = require('./Word');
const listOfWords = require('./guessWords');
const inquirer = require('inquirer');



// ===================================================
// ** start **
// ===================================================
const chosenWord = listOfWords.createNewWord();
promptPlayer();

// startGame();


// function startGame() {
//   console.log(chosenWord.getWord());
  
  
//   // console.log(chosenWord.getWord());

// }


function promptPlayer() {
  console.log(chosenWord.getWord());
  
  return inquirer.prompt([
    {
      type: 'input',
      name: 'playerGuess',
      message: 'Pick a letter!'
    }
  ]).then(answers => {
    // TODO: did the user win/lose/run out of guesses???
    console.log(`You have selected: ${answers.playerGuess}\n`);
    
    promptPlayer();
    
  }).catch(err => {
    console.log(err);
  })
}