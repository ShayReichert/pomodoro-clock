import React, { Component, Fragment } from 'react'

class BreakSessionLabels extends Component {

    render() {
        const {
            breakLength,
            sessionLength,
            handleDecrementBreak,
            handleIncrementBreak,
            handleDecrementSession,
            handleIncrementSession,
            isStart
        } = this.props
        return (
            <Fragment>
                <div className="session-element">
                    <h5>break</h5>
                    <div id="break-label"><br />
                        <div id="break-decrement" onClick={handleDecrementBreak} className={isStart ? 'disabled' : ''}>-</div>
                        <div id="break-length">{breakLength}</div>
                        <div id="break-increment" onClick={handleIncrementBreak} className={isStart ? 'disabled' : ''}>+</div>
                    </div>
                </div>

                <div className="session-element">
                    <h5>session</h5>
                    <div id="session-label">
                        <div id="session-decrement" onClick={handleDecrementSession} className={isStart ? 'disabled' : ''}>-</div>
                        <div id="session-length">{sessionLength}</div>
                        <div id="session-increment" onClick={handleIncrementSession} className={isStart ? 'disabled' : ''}>+</div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BreakSessionLabels