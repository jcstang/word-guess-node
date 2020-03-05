const Word = require('./Word');
const guessWords = require('./guessWords');
const inquirer = require('inquirer');

let listOfGuesses = {
  letters: [],
  thing: true
}

let pickWord = guessWords[Math.floor(Math.random() * guessWords.length)];
console.log(pickWord);
const chosenWord = new Word(pickWord);
// console.log(chosenWord);
console.log(chosenWord.getWord());

const userGuessThing = gatherAnswers();
// console.log(userGuessThing);






function gatherAnswers() {
  return getUserGuess().then(function(guess) {
    listOfGuesses.letters.push(guess);
    hasCorrectLetter(guess);
    chosenWord.getWord();
    
    // return getUserGuess();
  }).then(function() {
    // return listOfGuesses;
  });
}

function hasCorrectLetter(guess) {
  let retVal = false;

  for (let i = 0; i < chosenWord.arrayOfLetters.length; i++) {
    const element = chosenWord.arrayOfLetters[i];
    if(element.displayLetter === guess) {
      console.log('cool bro!');
      element.toggleHasBeenGuessed();

      retVal = true;
    }
    
  }

  return retVal;
}



function getUserGuess() {
  return inquirer.prompt([
      {
        type: 'input',
        name: 'userGuess',
        message: 'Pick a letter'
      }
  ])
    .then(answers => {
      console.log(answers);
    })
    .catch(error => {
      if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}