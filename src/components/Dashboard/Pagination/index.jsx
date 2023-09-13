import React, { useState } from 'react'
import "./style.css"
import Pagination from "@mui/material/Pagination";

export default function PaginationComponent({ page, handlePageChange }) {
  return (
    <div className="pagination-component">
      <Pagination
        count={9}
        page={page}
        onChange={(event, value) => handlePageChange(event, value)}
        sx={{
          color: "var(--white)",
          "& .Mui-selected ": {
            backgroundColor: "var(--blue) !important",
            color: "var(--white) !important",
            borderColor: "var(--blue) !important",
          },
          "& .Mui-PaginationItem-ellipsis ": {
            border: "0px solid var(--grey) !important",
          },
          "& .Mui-PaginationItem-text ": {
            color: "var(--white)",
            border: "1px solid var(--grey)",
          },
        }}
      />
    </div>
  );
}