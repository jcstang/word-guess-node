// const Word = require('./Word');
const listOfWords = require('./guessWords');
const inquirer = require('inquirer');



// ===================================================
// ** start **
// ===================================================
const chosenWord = listOfWords.createNewWord();
promptPlayer();



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
    if (!hasCorrectLetter(answers.playerGuess)) {
      console.log('boooooo!!!');
      
    }
    
    promptPlayer();
    
  }).catch(err => {
    console.log(err);
  })
}

function hasCorrectLetter(guess) {

  for (let i = 0; i < chosenWord.arrayOfLetters.length; i++) {
    const element = chosenWord.arrayOfLetters[i];
    console.log(`this: ${element.displayLetter} === ${guess}`);
    if (element.displayLetter === guess) {
      element.toggleHasBeenGuessed();

      return true;
    }
    
  }

  return false;
}