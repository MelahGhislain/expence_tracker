import React, { Component } from "react";
import Header from "./components/Header";
import Board from "./components/Board";

const expenses = [
  {
    id: 1,
    date: new Date(2020, 3, 20),
    title: "Rent",
    amount: 200.78,
  },
  {
    id: 2,
    date: new Date(2019, 2, 30),
    title: "Insurance",
    amount: 20.22,
  },
  {
    id: 3,
    date: new Date(2021, 5, 15),
    title: "Phone",
    amount: 10.08,
  },
];

export default class App extends Component {

  getExpenseData = (expenseItem) =>{
    console.log("From App")
    console.log(expenseItem)
    return expenseItem
  }

  render() {
    return (
      <div className="app">
        <div className="container"> 
          <Header getData={this.getExpenseData}/>
          <Board expenses={expenses}  />
        </div>
      </div>
    );
  }
}
