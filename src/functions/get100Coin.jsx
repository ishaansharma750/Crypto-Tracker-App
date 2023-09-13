import axios from "axios";

// "https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"



export const get100Coin = () => {
  const myCoins = axios
  .get(
    
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    )
    .then((response) => {
      // console.log("data leo :", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("Error fetching data:", error);
    });
  return myCoins;
};
