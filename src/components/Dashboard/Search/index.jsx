import React, { useState } from "react";
import "./style.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchBar = ({search , onChange}) => {

  return (
    <div className="search-flex">
      <SearchRoundedIcon />
      <input
        placeholder="Search"
        type="text"
        value={search}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default SearchBar;
