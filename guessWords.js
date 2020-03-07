const Word = require('./Word');

const guessWords = [
  'Canteloupe',
  'Basket',
  'Chicago',
  'Ocean',
  'Humidity',
  'Shirt',
  'Outside',
  'Book',
  'Grapes',
  'Sidewalk',
  'New York',
  'Baseball',
  'Gecko',
  'Australia',
  'Birthday'
];

const createNewWord = function() {
  let randomishNumber = Math.floor(Math.random() * guessWords.length);
  let pickWord = guessWords[randomishNumber];

  return new Word(pickWord);
}

module.exports = {
  guessWords: guessWords,
  createNewWord: createNewWord
};