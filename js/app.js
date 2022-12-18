let cardTitle = document.getElementsByClassName('card-title');
let cardDescription = document.getElementsByClassName('card-description');
let cardImg = document.getElementsByClassName('card-img');
let box = document.getElementById('box')
const getCard = new GetCard();
console.log(getCard);
function showCard(){
    for(let i = 0;i< getCard.card.length;i++){
        box.innerHTML += `
        <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img id="card-img" class="card-img" src="${getCard.card[i].imgUrl}" alt="Avatar" />
          </div>
          <div class="flip-card-back">
            <h1>${getCard.card[i].title}</h1>
            <p>${getCard.card[i].description}</p>
          </div>
        </div>
        </div>`
    }
}
showCard();