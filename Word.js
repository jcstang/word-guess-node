const Letter = require('./Letter');

function Word(wordString) {
  this.arrayOfLetters = buildWord(wordString);
  this.hasWordBeenGuessed = false;
}

Word.prototype = {
  getWord: function() {
    let returnWord = '';

    for (let i = 0; i < this.arrayOfLetters.length; i++) {
      const letter = this.arrayOfLetters[i];
      returnWord += letter.getLetter();
    }
    return returnWord;
  },
  wordWinCheck: function() {
    for (const key in this.arrayOfLetters) {
      const element = this.arrayOfLetters[key];
      if(!element.hasBeenGuessed) {
        return false;
      }
    }

    return true;
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


// ===================================================
// testing out constructor 
// ===================================================
// const coolWord = new Word("canteloupe");
// console.log(coolWord);
// console.log(coolWord.getWord());
// ^^^ this works GREAT!!!!

// TODO: prepare for module.exports

module.exports = Word;





