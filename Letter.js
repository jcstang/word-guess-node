

function Letter(displayLetter, hasBeenGuessed) {
  this.displayLetter = displayLetter;
  this.hasBeenGuessed = hasBeenGuessed;
}

Letter.prototype = {
  getLetter: function() {
  
    if(this.hasBeenGuessed) {
      return `${this.displayLetter} `;
    }

    return '_ ';
  },
  toggleHasBeenGuessed: function() {
    if (this.hasBeenGuessed === true) {
      this.hasBeenGuessed = false;
    } else {
      this.hasBeenGuessed = true;
    }
  },
  letterHasBeenGuessed: function() {
    this.hasBeenGuessed = true;
  }
}

// const myLetter = new Letter('A', false);
// console.log(myLetter.getLetter());

module.exports = Letter;