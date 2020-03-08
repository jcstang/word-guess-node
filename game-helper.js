function hasCorrectLetter(playerGuess, chosenWord) {
  let retValue = false;
  for (let i = 0; i < chosenWord.arrayOfLetters.length; i++) {
    const element = chosenWord.arrayOfLetters[i];

    if (element.displayLetter.toLowerCase() === playerGuess) {
      element.letterHasBeenGuessed();
      retValue = true;
    }
    
  }

  return retValue;
}

function hasWon(word) {
  return word.wordWinCheck();
}

module.exports = {
  hasCorrectLetter: hasCorrectLetter,
  hasWon: hasWon
}