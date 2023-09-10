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


class Deck {
  constructor() {
    this.cards = [];
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

    for (const suit of suits) {
      for (const rank of ranks) {
        this.cards.push(new Card(suit, rank));
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  deal(player1, player2) {
    this.shuffle();
    for (let i = 0; i < this.cards.length; i += 2) {
      player1.receiveCard(this.cards[i]);
      player2.receiveCard(this.cards[i + 1]);
    }
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.score = 0;
  }

  receiveCard(card) {
    this.hand.push(card);
  }

  playCard() {
    return this.hand.pop();
  }
}

class Game {
  constructor(player1Name, player2Name) {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
    this.deck = new Deck();
  }

  playRound() {
    const card1 = this.player1.playCard();
    const card2 = this.player2.playCard();
    const comparison = card1.compare(card2);

    if (comparison === 1) {
      this.player1.score += 1;
    } else if (comparison === -1) {
      this.player2.score += 1;
    }
  }

  playGame() {
    this.deck.deal(this.player1, this.player2);
    while (this.player1.hand.length > 0) {
      this.playRound();
    }

    if (this.player1.score > this.player2.score) {
      console.log(`${this.player1.name} wins with a score of ${this.player1.score}-${this.player2.score}`);
    } else if (this.player1.score < this.player2.score) {
      console.log(`${this.player2.name} wins with a score of ${this.player2.score}-${this.player1.score}`);
    } else {
      console.log("It's a tie!");
    }
  }
}
const game = new Game("Player 1", "Player 2");
game.playGame();

module.exports = new week06codeproject();