import React, {Component} from 'react';


export default class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="header-container">
                <div className="header">
                    <h2>Add New Expense</h2>
                </div>
            </div>
        );
    }
}