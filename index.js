// const Word = require('./Word');
const listOfWords = require('./guessWords');
const inquirer = require('inquirer');
const chalk = require('chalk');
const helper = require('./game-helper');



// ===================================================
// ** start **
// ===================================================
let guessCount = 9;
const chosenWord = listOfWords.createNewWord();
promptPlayer();



function promptPlayer() {
  console.log(`${chosenWord.getWord()}\n`);
  console.log(`You have ${chalk.red(guessCount)} guesses left!`);
  
  

  if(helper.hasWon(chosenWord)) {
    winningHandler();
  }

  return inquirer.prompt([
    {
      type: 'input',
      name: 'playerGuess',
      message: 'Pick a letter!'
    }
  ]).then(answers => {
    // console.log(chalk.green(`You have selected: ${chalk.blueBright(answers.playerGuess)}\n`));

    if (!helper.hasCorrectLetter(answers.playerGuess, chosenWord)) {
      console.log(chalk.red('boooooo!!!'));

      guessCount--;
      if(guessCount <= 0) {
        losingHandler();
      }
      
    }
    
    promptPlayer();
    
  }).catch(err => {
    console.log(err);
  })
}


// function hasCorrectLetter(guess) {
//   let retValue = false;
  
//   for (let i = 0; i < chosenWord.arrayOfLetters.length; i++) {
//     const element = chosenWord.arrayOfLetters[i];
//     // console.log(`this: ${element.displayLetter} === ${guess}`);

//     if (element.displayLetter.toLowerCase() === guess) {
//       // element.toggleHasBeenGuessed();
//       element.letterHasBeenGuessed();
//       retValue = true;
//     }
    
//   }

//   return retValue;
// }

// function hasWon(word) {
//   return word.wordWinCheck();
// }


function winningHandler() {
  console.log(chalk.green('\nwinnnnnnning!!!!!!\n'));
  process.exit();
}

function losingHandler() {
  console.log(chalk.bgRedBright('\nyou loose!!!!'));
  process.exit();
}