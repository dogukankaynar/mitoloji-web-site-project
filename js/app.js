let box = document.getElementById("box");
let content = document.getElementById("content");
let content2 = document.getElementById("content-2");
let allCardBtn = document.getElementById("all-card");
let index = document.getElementById("index");
let hakkimizda = document.getElementById("hakkimizda")
const getCard = new GetCard();

/*mainde türk mitolojisi hakkında bilgi veriyor*/
function showContent() {
  content.style.height = "500px";
  content.innerHTML += `
    <h1 class="content-title">${getCard.contentText[0].title}</h1>
    <p class="content-description">${getCard.contentText[0].description}</p>
    `;
  console.log("calistim");
}

/*Tüm detaylı büyük kartları gösterir */

/*detaylı büyük kart gösteriyor */
function showBigCard(e) {
  let j = 0;
  content.style.height = "0px";
  while (j < getCard.card.length) {
    if (e == getCard.card[j].title) {
      content2.innerHTML += `
      <div class="card-2">
            <div class="card-2-img-div" class="card-img">
            <img id="card-2-img" class="card-img" src="${getCard.card[j].imgUrl}" />
            </div>
            <div class="card-menu">
              <div class="card-description">
                <h1 class="card-2-title">${getCard.card[j].title}</h1>
                <p class="card-2-p">${getCard.card[j].description}</p>
              </div>
            </div>
          </div>
      `;
    }
    j++;
  }
  removeCard(); /*kartı siliyor*/
  document.getElementById("back-btn");
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

function allshowBigCard() {
  let x = 0;
  box.innerHTML = "";
  content.innerHTML = "";
  content2.innerHTML="";
  content.style.height = "0px";
  while (x < getCard.card.length) {
    content2.innerHTML += `
    <div class="card-2">
          <div class="card-2-img-div" class="card-img">
          <img id="card-2-img" class="card-img" src="${getCard.card[x].imgUrl}" />
          </div>
          <div class="card-menu">
            <div class="card-description">
              <h1 class="card-2-title">${getCard.card[x].title}</h1>
              <p class="card-2-p">${getCard.card[x].description}</p>
            </div>
          </div>
        </div>
    `;
    x++;
  }
  console.log("calistim abe");
}
function showIndex() {
  content.innerHTML = "";
  showContent();
  box.innerHTML = "";
  showCard();
  content2.innerHTML = "";
}
//flip kartları siliyor
function removeCard() {
  box.innerHTML = "";
  content.innerHTML = "";
  console.log("clistim");
}

/*karta tıkladıgında detaylı açıklaması gözükecek*/
function addBigCard(e) {
  let elementName = e.target.parentElement.parentElement.parentElement.id;
  showBigCard(elementName);
}

function about(){
  content.innerHTML = "";
  box.innerHTML = "";
  content2.innerHTML = "";
  showContent();
}
function eventListeners() {

  //tıklandıgında büyük kart gösterecek
  box.addEventListener("click", addBigCard);

  //tıklandıgında tüm büyük kartları gösterecek
  allCardBtn.addEventListener("click", allshowBigCard);

  //anasayfayı tekrar açar
  index.addEventListener("click", showIndex);

  /*sayfa ilk yüklendiğinde*/
  document.addEventListener("DOMContentLoaded", () => {
    showContent();
    showCard();
  });
  //hakkimizdana tıklandıgında
  hakkimizda.addEventListener("click",about)
}
eventListeners();
