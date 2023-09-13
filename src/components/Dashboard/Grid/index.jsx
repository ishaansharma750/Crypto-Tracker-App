import React from "react";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";

const Grid = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div
        className={`grid-card ${
          coin.price_change_percentage_24h < 0 && "grid-card-red"
        }`}>
        <div className="info-flex">
          <img className="coin-logo" src={coin.image} alt={coin.name} />
          <div className="name-col">
            <p className="coin-symbol"> {coin.symbol}</p>
            <p className="coin-name"> {coin.name}</p>
          </div>
        </div>
        {coin.price_change_percentage_24h.toFixed(2) > 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip">
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip chip-red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip chip-red">
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}
        <div className="info-Container">
          <h3
            className="coin-price"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}>
            ${coin.current_price.toLocaleString()}
          </h3>
          <p className="total-volume">
            Total Volume : {coin.total_volume.toLocaleString()}
          </p>
          <p className="total-mrkcap">
            Market Cap : ${coin.market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Grid;
