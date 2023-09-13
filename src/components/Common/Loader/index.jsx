import { CircularProgress } from "@mui/material";
import React from "react";
import "./style.css"

const Loader = () => {
  return (
    <div className="loder-div">
      <CircularProgress />
    </div>
  );
};

export default Loader;
