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
console.log(chosenWord.getWord());

const userGuessThing = gatherAnswers();






function gatherAnswers() {
  return getUserGuess().then(function(guess) {
    listOfGuesses.letters.push(guess);

  }).then(function() {
    // return listOfGuesses;
  });
}

function hasCorrectLetter(guess) {
  let retVal = false;

  for (let i = 0; i < chosenWord.arrayOfLetters.length; i++) {
    const element = chosenWord.arrayOfLetters[i];
    console.log(`this: ${element.displayLetter} === ${guess}`);
    
    
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
      console.log('this is line 65 index.js');
      
      console.log(answers);
      hasCorrectLetter(answers.userGuess);
      console.log( chosenWord.getWord() );
      
    })
    .catch(error => {
      if(error.isTtyError) {

      } else {

      }
    });
}