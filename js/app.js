let box = document.getElementById("box");
let content = document.getElementById("content");
let content2 = document.getElementById("content-2");
const getCard = new GetCard();

/*mainde türk mitolojisi hakkında bilgi veriyor*/ 
function showContent(){
    content.innerHTML+=`
    <h1 class="content-title">${getCard.contentText[0].title}</h1>
    <p class="content-description">${getCard.contentText[0].description}</p>
    `
    console.log(getCard.card);
  }

  /*detaylı büyük kart gösteriyor */
 function showBigCard(e){
   let j=0;
    while (j < getCard.card.length) {
    if(e==getCard.card[j].title){
      content2.innerHTML+=`
      <div class="card-2">
            <div class="card-2-img-div" class="card-img">
            <img id="card-2-img" class="card-img" src="${getCard.card[j].imgUrl}" />
            </div>
            <div class="card-menu">
              <div class="card-description">
                <h1 class="card-2-title">${getCard.card[j].title}</h1>
                <p class="card-2-p">${getCard.card[j].description}</p>
              </div>
              <div class="card-btn-div">
                <button id="back-btn" class="card-btn"></button>
              </div>
            </div>
          </div>
      `
    }
    j++;
  }
  removeCard(); /*kartı siliyor*/
  document.getElementById("back-btn")
  console.log(backBtn);
  }

  /*kartları gösterir */
  function showCard() {
  let i = 0;
  while (i < getCard.card.length) {
      box.innerHTML += `
          <div id="${getCard.card[i].title}" class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img id="card-img" class="card-img" src="${getCard.card[i].imgUrl}" />
            </div>
          <div class="flip-card-back">
            <h1>${getCard.card[i].title}</h1>
            <p id="${getCard.card[i].title}">${getCard.card[i].description}</p>
          </div>
        </div>
      </div>`;
    i++;
  }
}

//flip kartları siliyor
function removeCard() {
  box.innerHTML=""
  content.innerHTML=""
  content.style.height="0px";
  console.log("clistim");
}

document.addEventListener("click", addBigCard);
/*karta tıkladıgında detaylı açıklaması gözükecek*/
function addBigCard(e) {
  let elementName = e.target.parentElement.parentElement.parentElement.id
  showBigCard(elementName);
}


showCard();
showContent();
// showBigCard();