import React, { useState } from "react";
import ChartContainer from "./ChartContainer";
import ExpenceItem from "./ExpenceItem";

export default function Board(props) {
  const [year, setYear] = useState("2020");

  function getYear() {
    const getYears = props.expenses.map((item) => item.date.getFullYear());
    let years = [];
    // elimminate repeated years
    for(let i=0; i<getYears.length; i++){
      if (!years.includes(getYears[i])){
        years.push(getYears[i])
      }
    }
    return years;
  }

  // filter's the expense data by year
  function filterByYear(e) {
    setYear(e.target.value);
    const filteredData = props.expenses.filter(item => (parseInt(item.date.getFullYear()) === parseInt(e.target.value)))
    props.filteredData(filteredData);
  }

  return (
    <div className="board">
      <div className="filter-container">
        <h4>Filter by year</h4>
        <div className="span"></div>
        <div className="year-container">
          <span className="year">
            <select value={year} onChange={filterByYear}>
              {getYear().map((year) => (
                <option value={year}>
                  {year}
                </option>
              ))}
            </select>
          </span>
        </div>
      </div>

      <ChartContainer />
      {props.expenses.map((item) => (
        <ExpenceItem key={item.id} expense={item} />
      ))}
    </div>
  );
}
