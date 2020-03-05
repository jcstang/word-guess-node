const inquirer = require('inquirer');

function PromptUser() {
  this.hasBeenFun = true;
}

PromptUser.prototype = {
  getAnswer: function() {
    return inquirer
    .prompt([
      {
        type: 'input',
        name: 'userGuess',
        message: 'Pick a letter'
      }
    ])
    .then(answers => {
      // Use user feedback for... whatever!!
    })
    .catch(error => {
      if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
  }
}



  module.exports = PromptUser;