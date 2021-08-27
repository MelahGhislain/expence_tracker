import React, { Component } from 'react'

export default class ExpenceItem extends Component {
    render() {
        return (
            <div className="expencse-contianer">
                <div className="date-time"> 
                    New TV
                </div>
                <div className="span"></div>
                <div className="amount"> 
                    $22.00
                </div>
            </div>
        )
    }
}
