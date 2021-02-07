const main = document.querySelector('main');
const url = 'https://api.coinranking.com/v2/coins';
const coinBG = document.querySelector('.coins');

async function getCoins() {
  const response = await fetch(url);
  const results = await response.json();
  const allCoins = results.data.coins;
  console.log(allCoins);

  for (let i = 0; i < allCoins.length; i++) {
    main.innerHTML += `
    <div class="coins">
    <img src="${allCoins[i].iconUrl}" width="50px" >
    <h2>${allCoins[i].name}</h2>
    </div>
    `;
    console.log(allCoins[i].color);
    // if (allCoins[i].color === null) {
    //   coinBG.style.backgroundColor = 'white';
    // } else {
    //   coinBG.style.backgroundColor = allCoins[i].color;
    // }
  }
}

getCoins();
