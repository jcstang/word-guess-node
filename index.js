const Word = require('./Word');
const askQuestion = require('./ask-question');

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
  'Sidewalk'
];
const question = new askQuestion();

let pickWord = guessWords[Math.floor(Math.random() * guessWords.length)];
console.log(pickWord);
const chosenWord = new Word(pickWord);
console.log(chosenWord);
console.log(chosenWord.getWord());



question.getAnswer().then(function(resp) {
  console.log(resp);
  
  question.getAnswer();
});
