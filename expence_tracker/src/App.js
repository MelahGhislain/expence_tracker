import React, { Component } from "react";
import Header from "./components/Header";
import Board from "./components/Board";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredExpenses: [],
      expenses: [
        {
          id: 1,
          date: new Date(2020, 3, 20),
          title: "Rent",
          amount: 200.78,
        },
      ],
    };
  }
  getFilteredData = (expenseItems) => {
    this.setState({ filteredExpenses: [...expenseItems]});
   
  };

  getExpenseData = (expenseItem) => {
    this.setState({expenses: [expenseItem, ...this.state.expenses] });
  };

  render() {
    return (
      <div className="app">
        <div className="container">
          <Header getData={this.getExpenseData} />
          <Board
            expenses={
              this.state.filteredExpenses === []
                ? this.state.filteredExpenses
                : 
                this.state.expenses
            }
            filteredData={this.getFilteredData}
          />
        </div>
      </div>
    );
  }
}
