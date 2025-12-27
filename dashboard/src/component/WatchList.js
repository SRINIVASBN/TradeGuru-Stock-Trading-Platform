import React, { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";
import { watchlist } from "../data/data";
import { GeneralContext } from "./GeneralContext"; // Import the context
import './WatchList.css';

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input type="text" name="search" id="search" placeholder="Search eginfly, bse, nifty fut weekly, gold mck . . . " className="search"/>
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchListActions(true)}
      onMouseLeave={() => setShowWatchListActions(false)}
      className="watchlist-item"
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"} style={{fontSize:"14px",fontWeight:"400"}}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions stock={stock} />} {/* Pass stock as prop */}
    </li>
  );
};

const WatchListActions = ({ }) => { // Accept stock as prop
  const { openBuyWindow } = useContext(GeneralContext); // Get openBuyWindow from context

  return (
    <span className="actions">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button className="buy" aria-label="Buy Stock" onClick={() => openBuyWindow(stock.name)}>Buy</button>
      </Tooltip>

      <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button className="sell" aria-label="Sell Stock">Sell</button>
      </Tooltip>

      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
        <button className="action" aria-label="View Analytics">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>

      <Tooltip title="More (M)" placement="top" arrow TransitionComponent={Grow}>
        <button className="action-1" aria-label="More Options">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
    </span>
  );
};