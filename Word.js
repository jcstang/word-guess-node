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
// const coolWord = new Word(nextWord.split(''));
let wordCreate = [];

for (let i = 0; i < nextWord.split('').length; i++) {
  const theLetter = nextWord.split('')[i];
  wordCreate.push(new Letter(theLetter, true));
}

const coolWord = new Word(wordCreate);
console.log(coolWord);

