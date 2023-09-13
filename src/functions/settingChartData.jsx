import { convertDate } from "./convertDate";

const settingChartData = (setChartData, prices1,prices2) => {
  // if (Array.isArray(prices1)) { // Check if prices is an array
    if(prices2){
      setChartData({
        labels: prices1.map((price) => convertDate(price[0])),
        datasets: [
          {
            label: "Crypto 1",
            data: prices1.map((price) => price[1]),
            borderColor: "#3a80e9",
            borderWidth: 4,
            fill: false,
            tension: 0.25,
            borderColor: "#3a80e9",
            pointRadius: 1,
            yAxisID: "crypto1",
          },
          {
            label: "Crypto 2",
            data: prices2.map((price) => price[1]),
            borderColor: "#3a80e9",
            borderWidth: 4,
            fill: false,
            tension: 0.25,
            borderColor: "#61c96f",
            pointRadius: 1,
            yAxisID: "crypto2",
          },
        ],
      });
    }
    else{
    setChartData({
      labels: prices1.map((item) => convertDate(item[0])),
      datasets: [
        {
          data: prices1.map((price) => price[1]),
          borderColor: "#3a80e9",
          borderWidth: 4,
          fill: true,
          tension: 0.25,
          backgroundColor: "rgba(58,128,233,0.1)",
          borderColor: "#3a80e9",
          pointRadius: 1,
          yAxisID: "crypto1",
        },
      ],
    });
  }
}
export default settingChartData;

