// const Word = require('./Word');
const listOfWords = require('./guessWords');
const inquirer = require('inquirer');
const chalk = require('chalk');



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
    console.log(chalk.green(`You have selected: ${chalk.blueBright(answers.playerGuess)}\n`));
    if (!hasCorrectLetter(answers.playerGuess)) {
      console.log(chalk.red('boooooo!!!'));
      
    }
    
    promptPlayer();
    
  }).catch(err => {
    console.log(err);
  })
}

function hasCorrectLetter(guess) {
  let retValue = false;
  
  for (let i = 0; i < chosenWord.arrayOfLetters.length; i++) {
    const element = chosenWord.arrayOfLetters[i];
    // console.log(`this: ${element.displayLetter} === ${guess}`);

    if (element.displayLetter.toLowerCase() === guess) {
      element.toggleHasBeenGuessed();
      retValue = true;
    }
    
  }

  return retValue;
}