let cardTitle = document.getElementById('card-title');
let cardDescription = document.getElementById('card-description');
let cardImg = document.getElementById('card-img');
console.log(cardDescription);
const getCard = new GetCard();
console.log(getCard);
function showCard(){
cardTitle.textContent=getCard.card[0].title;
cardDescription.textContent=getCard.card[0].description;
cardImg.src=`${getCard.card[0].imgUrl}`
}
showCard();