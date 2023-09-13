import React from "react";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
import { converNumber } from "../../../functions/convertNumber";
import { Link } from "react-router-dom";

const List = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <tr className="list-row">
        <Tooltip title="Coin Logo" placement="bottom-start">
          <td className="td-image">
            <img className="coin-logo" src={coin.image} alt={coin.name} />
          </td>
        </Tooltip>

        <Tooltip title="Coin info" placement="bottom-start">
          <td>
            <div className="name-col">
              <p className="coin-symbol"> {coin.symbol}</p>
              <p className="coin-name"> {coin.name}</p>
            </div>
          </td>
        </Tooltip>

        <Tooltip title="Price change in 24Hrs" placement="bottom-start">
          {coin.price_change_percentage_24h.toFixed(2) > 0 ? (
            <td className="chip-flex">
              <div className="price-chip">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip td-icon">
                <TrendingUpRoundedIcon />
              </div>
            </td>
          ) : (
            <td className="chip-flex">
              <div className="price-chip chip-red">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip chip-red td-icon">
                <TrendingDownRoundedIcon />
              </div>
            </td>
          )}
        </Tooltip>

        <Tooltip title="Current Price" placement="bottom">
          <td className="info-Container">
            <h3
              className="coin-price
          td-center-align"
              style={{
                color:
                  coin.price_change_percentage_24h < 0
                    ? "var(--red)"
                    : "var(--green)",
              }}>
              ${coin.current_price.toLocaleString()}
            </h3>
          </td>
        </Tooltip>

        <Tooltip title="Coin Volume" placement="bottom-end">
          <td className="desktop-td-mkt">
            <p className="total-volume td-right-align td-total-volume">
              {coin.total_volume.toLocaleString()}
            </p>
          </td>
        </Tooltip>

        <Tooltip title="Market Capital" placement="bottom-end">
          <td className="mobile-td-mkt">
            <p className="total-mrkcap td-right-align">
              ${converNumber(coin.market_cap)}
            </p>
          </td>
        </Tooltip>
      </tr>
    </Link>
  );
};

export default List;
