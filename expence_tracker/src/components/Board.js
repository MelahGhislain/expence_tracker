import React from "react";
import ChartContainer from "./ChartContainer";

export default function Board() {
  return (
    <div className="board">
      <div className="filter-container">
        <h4>Filter by year</h4>
        <div className="span"></div>
        <div className="year-container">
          <span className="year">
            2021
          </span>
          <span>&raquo;</span>
        </div>
      </div>

      <ChartContainer />
    </div>
  );
}
