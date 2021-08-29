import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: true,
    };
  }

  render() {
    return (
      <div className="header-container">
        {this.state.displayForm ? (
          <ExpenseForm />
        ) : (
          <div className="header">
            <h2>Add New Expense</h2>
          </div>
        )}
      </div>
    );
  }
}
