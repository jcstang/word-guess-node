const Letter = require('./Letter');

function Word(letterArr) {
  this.arrayOfLetters = letterArr;
}

Word.prototype = {
  getWord: function() {
    const returnWord = '';

    for (let i = 0; i < this.arrayOfLetters.length; i++) {
      const letter = this.arrayOfLetters[i];
      returnWord += letter.getLetter();
    }

  }
}


// let letterList2 = guess.split('');
// console.log(letterList2);

let nextWord = 'canteloupe';
const coolWord = new Word(nextWord.split(''));