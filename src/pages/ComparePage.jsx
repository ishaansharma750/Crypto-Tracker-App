import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import SelectCoin from "../components/Compare/SelectCoin";
import SelectDays from "../components/Coin/SelectDays";
import { coinObject } from "../functions/coinObject";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrice } from "../functions/getCoinPrice";
import Loader from "../components/Common/Loader";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
import settingChartData from "../functions/settingChartData";
import LineChart from "../components/Coin/LineChart";
import TogglePriceType from "../components/Coin/PriceType";

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("ripple");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [priceType, setPriceType] = useState("prices");
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({});
  const [days, setDays] = useState(30);

  const handleDaysChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices1 = await getCoinPrice(crypto1, event.target.value, priceType);
    const prices2 = await getCoinPrice(crypto2, event.target.value, priceType);
    settingChartData(setChartData, prices1, prices2);
    setLoading(false);
  };

  const handlePriceType = async (event, newType) => {
    setLoading(true);
    setPriceType(newType);
    const prices1 = await getCoinPrice(crypto1, days, newType);
    const prices2 = await getCoinPrice(crypto2, days, newType);
    settingChartData(setChartData, prices1, prices2);
      setLoading(false);
    }

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const Data1 = await getCoinData(crypto1);
    if (Data1) {
      const Data2 = await getCoinData(crypto2);
      coinObject(setCrypto1Data, Data1);
      if (Data2) {
        coinObject(setCrypto2Data, Data2);
        const prices1 = await getCoinPrice(crypto1, days, priceType);
        const prices2 = await getCoinPrice(crypto2, days, priceType);
        settingChartData(setChartData, prices1, prices2);
        setLoading(false);
      }
    }
  };

  const handleCoinChange = async (event, isCoin2) => {
    setLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const Data = await getCoinData(event.target.value);
      coinObject(setCrypto2Data, Data);
      const prices1 = await getCoinPrice(crypto1, days, priceType);
      const prices2 = await getCoinPrice(crypto2, days, priceType);
      if (prices1.length > 0 && prices2.length > 0) {
        // settingChartData(setChartData, prices);
        console.log("Prices :", prices1, "second: ", prices2);
        setLoading(false);
      }
    } else {
      setCrypto1(event.target.value);
      const Data = await getCoinData(event.target.value);
      coinObject(setCrypto1Data, Data);
      console.log(event.target.value);
    }
  };

  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="coin-days-flex">
            <SelectCoin
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
            />
            <SelectDays
              days={days}
              handleDaysChange={handleDaysChange}
              noPtag={true}
            />
          </div>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={crypto1Data} />
          </div>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={crypto2Data} />
          </div>
          <div className="grey-wrapper">
            <TogglePriceType priceType={priceType} handlePriceType={handlePriceType}/>
            <LineChart
              chartData={chartData}
              priceType={priceType}
              multiAxis={true}
            />
          </div>
          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      )}
    </div>
  );
};

export default ComparePage;
