const inquirer = require('inquirer');

module.exports = {
  askQuestion: function() {
  let count = 0;
  if (count < 5) {
    inquirer.prompt([
      {
        type: 'input',
        name: 'userGuess',
        message: 'Pick a letter'
      }
    ]).then(function(answers) {
      hasCorrectLetter(answers.userGuess)
      console.log( chosenWord.getWord() );
      
      count++;
      askQuestion();
    })
    .catch(error => {
      if(error.isTtyError) {

      } else {

      }
    });
  }
}
};