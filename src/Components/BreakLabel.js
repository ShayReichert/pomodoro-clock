import React, { Component } from 'react'

class BreakLabel extends Component {
    render() {
        const { handleIncrement, handleDecrement, breakLength } = this.props
        return (
            <div className="session-element">
                <h5>break</h5>
                <div id="break-label"><br />
                    <div id="break-decrement" onClick={handleDecrement}>-</div>
                    <div id="break-length">{breakLength}</div>
                    <div id="break-increment" onClick={handleIncrement}>+</div>
                </div>
            </div>

        )
    }
}

export default BreakLabel
