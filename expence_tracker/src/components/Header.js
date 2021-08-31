import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
    };
  }
  dismissForm = ()=>{
      this.setState({
          displayForm: !this.state.displayForm
      })
  }

  getExpenseData = (expenseItem) => {
    const expenseData = {
      ...expenseItem,
      id: Math.random().toString(),
    };
    this.props.getData(expenseData);
  };

  render() {
    return (
      <div className="header-container">
        {this.state.displayForm ? (
          <ExpenseForm getData={this.getExpenseData} dismissForm={this.dismissForm}/>
        ) : (
          <button className="btn" onClick={this.dismissForm}>
            <h2>Add New Expense</h2>
          </button>
        )}
      </div>
    );
  }
}
