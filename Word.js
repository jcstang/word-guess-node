const Letter = require('./Letter');

function Word(wordString) {
  this.arrayOfLetters = buildWord(wordString);
}

Word.prototype = {
  getWord: function() {
    let returnWord = '';

    for (let i = 0; i < this.arrayOfLetters.length; i++) {
      const letter = this.arrayOfLetters[i];
      returnWord += letter.getLetter();
    }
    return returnWord;
  }
}

function buildWord(wordString) {
  let wordCreate = [];
  for (let i = 0; i < wordString.split('').length; i++) {
    const theLetter = wordString.split('')[i];
    wordCreate.push(new Letter(theLetter, false));
  }
  
  return wordCreate;
}

let nextWord = 'canteloupe';

const coolWord = new Word("canteloupe");
console.log(coolWord);
console.log(coolWord.getWord());





