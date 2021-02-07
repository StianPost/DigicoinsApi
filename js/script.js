const main = document.querySelector('main');
const url = 'https://api.coinranking.com/v2/coins';

async function getCoins() {
  const response = await fetch(url);
  const results = await response.json();
  const allCoins = results.data.coins;
  console.log(allCoins);

  for (let i = 0; i < allCoins.length; i++) {
    main.innerHTML += `
    <div class="coins ${allCoins[i].symbol}">
    <img src="${allCoins[i].iconUrl}" height="50px" >
    <h2>${allCoins[i].name}</h2>
    <p>${allCoins[i].symbol}</p>
    <p>Price: ${allCoins[i].price}</p>
    <p>Ranking: ${allCoins[i].rank}</p>
    <p>MC: ${allCoins[i].marketCap}</p>
    </div>
    `;
    // console.log(allCoins[i]);
    // if (allCoins[i].color) {
    //   coinBG.style.backgroundColor = allCoins[i].color;
    // } else {
    //   coinBG.style.backgroundColor = 'white';
    // }
  }
}

getCoins();
