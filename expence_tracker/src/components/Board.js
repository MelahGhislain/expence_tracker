import React from "react";
import ChartContainer from "./ChartContainer";
import ExpenceItem from "./ExpenceItem";

export default function Board(props) {
  return (
    <div className="board">
      <div className="filter-container">
        <h4>Filter by year</h4>
        <div className="span"></div>
        <div className="year-container">
          <span className="year">2021</span>
          <span>&raquo;</span>
        </div>
      </div>

      <ChartContainer />
      {props.expenses.map((item) => (
        <ExpenceItem key={item.id} expense={item} />
      ))}
    </div>
  );
}
