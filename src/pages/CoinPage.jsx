import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import { coinObject } from "../functions/coinObject";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrice } from "../functions/getCoinPrice";
import LineChart from "../components/Coin/LineChart";
import SelectDays from "../components/Coin/SelectDays";
import settingChartData from "../functions/settingChartData";
import TogglePriceType from "../components/Coin/PriceType";

const CoinPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState(true);
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const Data = await getCoinData(id);
    if (Data) {
      coinObject(setCoins, Data);
      const prices = await getCoinPrice(id, days,priceType);
      if (prices.length > 0) {
        settingChartData(setChartData, prices);
        setLoading(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrice(id, event.target.value, priceType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
  };

  const handlePriceType = async (event, newType) => {
    setLoading(true);
    setPriceType(newType);
    const prices = await getCoinPrice(id, days, newType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper" style={{ padding: "0.5rem 1rem" }}>
            <List coin={coins} />
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <TogglePriceType
              priceType={priceType}
              handlePriceType={handlePriceType}
            />
            <LineChart chartData={chartData} priceType={priceType} />
          </div>
          <CoinInfo heading={coins.name} desc={coins.desc} />
        </>
      )}
    </div>
  );
};

export default CoinPage;
