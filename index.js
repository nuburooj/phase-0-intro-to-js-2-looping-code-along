// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);



function writeCards(names, event) {
    let newCards = [];
    for (let i = 0; i < names.length; i++) {
        let msg = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        newCards.push(msg);
        
    }
    return newCards;
}

function countDown(num){
while (num >= 0) {
  console.log(num) 
  num-- 
}
}