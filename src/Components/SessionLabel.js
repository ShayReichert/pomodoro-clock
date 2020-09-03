import React, { Component } from 'react'

class SessionLabel extends Component {
    render() {
        const { handleIncrement, handleDecrement, sessionLength } = this.props
        return (
            <div className="session-element">
                <h5>session</h5>
                <div id="session-label">
                    <div id="session-decrement" onClick={handleDecrement}>-</div>
                    <div id="session-length">{sessionLength}</div>
                    <div id="session-increment" onClick={handleIncrement}>+</div>
                </div>
            </div>

        )
    }
}

export default SessionLabel
