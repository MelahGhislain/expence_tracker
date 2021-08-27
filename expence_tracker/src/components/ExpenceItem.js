import React, { Component } from "react";

export default class ExpenceItem extends Component {
  render() {
    return (
      <div className="expencse-contianer">
        <div className="date-time">
          <div className="content">
              <span className="month">March</span>
              <span className="year">2021</span>
              <span className="day">12</span>
          </div>
          <div className="text">New TV</div>
        </div>
        <div className="span"></div>
        <div className="amount">$22.00</div>
      </div>
    );
  }
}
