var suits = ["Herz", "Piek", "Kreuz", "Karo"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

var myDeck = [{ suit: "Karo", card: 2 }, 
              { suit: "Piek", card: 10 }, 
              { suit: "Herz", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log("Karte: " + pickedCard1.card + " in " + pickedCard1.suit);

var pickedCard2 = pickCard(15);
console.log("Karte: " + pickedCard2.card + " in " + pickedCard2.suit);
