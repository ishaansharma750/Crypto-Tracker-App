import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import Tabs from "../components/Dashboard/Tabs";
import SearchBar from "../components/Dashboard/Search";
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import BackToTop from "../components/Common/BackToTop/Index";
import { get100Coin } from "../functions/get100Coin";

const DashBoard = () => {
  const [coins, setCoins] = useState([]);
  const [pageCoins, setPageCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
    var prevIndex = (value - 1) * 12;
    setPageCoins(coins.slice(prevIndex, prevIndex + 12));
  };

  const onChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };



// filtering the coin For Search Result 
  let filterCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );




  useEffect(() => {
    getCoin();
  }, []);

  const getCoin = async () => {
    const myCoins = await get100Coin();
    if (myCoins) {
      setCoins(myCoins);
      setPageCoins(myCoins.slice(0, 11));
      setLoading(false);
    }
  };



  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <div>
          <SearchBar search={search} onChange={onChange} />
          <Tabs coins={search ? filterCoins : pageCoins} />
          {!search && (
            <PaginationComponent
              handlePageChange={handlePageChange}
              page={page}
            />
          )}
          <BackToTop />
        </div>
      )}
    </>
  );
};

export default DashBoard;
