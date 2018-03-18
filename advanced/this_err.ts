var deck = {
  suits: ["Herz", "Piek", "Kreuz", "Karo"],
  cards: Array(52),
  createCardPicker: function() {
    return function() {
      var pickedCard = Math.floor(Math.random() * 52);
      var pickedSuit = Math.floor(pickedCard / 13);
      return {suit: this.suits[pickedSuit], card: pickedCard % 13};
    }
  }
}

var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();

console.log("Karte: " + pickedCard.card + " in " + pickedCard.suit);
