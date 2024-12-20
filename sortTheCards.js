
const cardNames = {
     'Ace':1,
     'Jack':11,
     'Queen':12,
    'King':13,
  };

function SortTheCard(cards) {

   for(let i=1;i<cards.length;i++){
    let numberToInsert = cards[i]
    let j = i-1;
    while(j>=0&&cards[j]>numberToInsert){
       cards[j+1]=cards[j];
       j=j-1 
    }
    cards[j+1] = numberToInsert
    
   }
   return cards
   
}
cards=[5, 6, 1, 12,'King', 'Queen']
console.log(SortTheCard(cards))

