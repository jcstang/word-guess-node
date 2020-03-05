const Word = require('./Word');
const Inquirer = require('Inquirer');

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

let pickWord = guessWords[Math.floor(Math.random() * guessWords.length)];
console.log(pickWord);
const chosenWord = new Word(pickWord);
console.log(chosenWord);
console.log(chosenWord.getWord());





