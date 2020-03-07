const Word = require('./Word');
const listOfWords = require('./guessWords');
const inquirer = require('inquirer');

// ===================================================
// start game
// ===================================================
startGame();


function startGame() {
  const chosenWord = createNewWord();
  // console.log(chosenWord);
  console.log(chosenWord.getWord());

  promptPlayer();

}

function createNewWord() {
  let randomishNumber = Math.floor(Math.random() * listOfWords.length);
  let pickWord = listOfWords[randomishNumber];

  // **** print pick word
  console.log(pickWord);
  

  return new Word(pickWord);
}

// function keepAsking() {
//   return promptPlayer().then(answer => {
//     //stuff
//   })
//   .then(answer => {
//     //stuff
//   })
//   .then(answer => {
//     //stuff
//   })
//   .then(answer => {
//     //stuff
//   })
// }


function promptPlayer() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'playerGuess',
      message: 'Pick a letter!'
    }
  ]).then(answers => {
    // somthing
    console.log(`cool guess bro: ${answers.playerGuess}\n`);
    // check the guess
    promptPlayer();
    
  }).catch(err => {
    console.log(err);
  })
}