const assert = require('chai').assert;
const describe = require('mocha').describe;
const it = require('mocha').it;

class Card {
    constructor(suit, rank) {
      this.suit = suit;
      this.rank = rank;
    }
  
    compare(card) {
      if (this.rank > card.rank) {
        return 1;
      } else if (this.rank < card.rank) {
        return -1;
      } else {
        return 0;
      }
    }
  }

describe('Card', () => {
  it('should return 0 when comparing cards with the same rank', () => {
    const card1 = new Card('Hearts', '7');
    const card2 = new Card('Diamonds', '8');
    const result = card1.compare(card2);
    assert.equal(result, 0, 'Expected result to be 0');
  });
})