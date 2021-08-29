import React, { Component } from 'react'

export default class ExpenseForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            enteredTitle: "",
            enteredAmount: "",
            enteredDate: "",
        }
    }
    onChangeTitleHandler = (e)=>{}
    onChangeAmountHandler = (e)=>{}
    onChangeDateHandler = (e)=>{}
    onSubmitHandler = (e)=>{
        e.preventDefault();
    }

    render() {
        return (
            <div className="myForm">
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-controls">
                        <div className="form-control">
                            <label>title</label>
                            <input type="text" className="title" value={this.state.enteredTitle} onChange={this.onChangeTitleHandler}></input>
                        </div>
                        <div className="form-control">
                            <label>Amount</label>
                            <input type="number" className="amount" value={this.state.enteredAmount} onChange={this.onChangeAmountHandler}></input>
                        </div>
                        <div className="form-control">
                            <label>Date</label>
                            <input type="date" className="date" value={this.state.enteredDate} onChange={this.onChangeDateHandler}></input>
                        </div>
                    </div>
                    <div className="btn">
                        <button type="submit" >Add Expense</button>
                    </div>
                </form>
            </div>
        )
    }
}
