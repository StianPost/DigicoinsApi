const main = document.querySelector('main');
const url = 'https://api.coinranking.com/v2/coins';

async function getCoins() {
  const response = await fetch(url);
  const results = await response.json();
  const allCoins = results.data.coins;
  let count = 0;
  // console.log(allCoins);

  for (let i = 0; i < allCoins.length; i++) {
    count++;
    let bGC = 'odd';
    if (count % 2 === 0) {
      bGC = 'even';
    }

    main.innerHTML += `
    <div class="coins ${bGC} ">
      <img src="${allCoins[i].iconUrl}" height="50px" >
      <h2>${allCoins[i].name}</h2>
      <p>${allCoins[i].symbol}</p>
      <p>Price: ${allCoins[i].price}</p>
      <p>Ranking: ${allCoins[i].rank}</p>
      <p>MC: ${allCoins[i].marketCap}</p>
    </div>
    `;

    // coinBG = document.querySelector('.${allCoins[i].symbol}');
    // console.log(allCoins[i]);
    // if (allCoins[i].color) {
    //   coinBG.style.backgroundColor = '${allCoins[i].color}';
    // } else {
    //   coinBG.style.backgroundColor = 'white';
    // }
  }
}

getCoins();
