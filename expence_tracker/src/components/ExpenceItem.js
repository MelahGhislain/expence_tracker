import React, { Component } from "react";

export default class ExpenceItem extends Component {
  

  formatDate = (dict) => {
    return this.props.expense.date.toLocaleString("en-US", dict);
  };

  render() {
    return (
      <div className="expencse-contianer">
        <div className="date-time">
          <div className="content">
            <span className="month">{this.formatDate({ month: "long" })}</span>
            <span className="year">{this.formatDate({ day: "2-digit" })}</span>
            <span className="day">{this.props.expense.date.getFullYear()}</span>
          </div>
          <div className="text">{this.props.expense.title}</div>
        </div>
        <div className="span"></div>
        <div className="amount">${this.props.expense.amount}</div>
      </div>
    );
  }
}
