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

                        <button
                            id="break-decrement"
                            onClick={handleDecrementBreak}
                            className={isStart ? 'disabled' : ''}>
                            -
                        </button>

                        <div id="break-length">{breakLength}</div>

                        <button
                            id="break-increment"
                            onClick={handleIncrementBreak}
                            className={isStart ? 'disabled' : ''}>
                            +
                        </button>

                    </div>
                </div>

                <div className="session-element">
                    <h5>session</h5>
                    <div id="session-label">

                        <button
                            id="session-decrement"
                            onClick={handleDecrementSession}
                            className={isStart ? 'disabled' : ''}>
                            -
                        </button>

                        <div id="session-length">{sessionLength}</div>

                        <button
                            id="session-increment"
                            onClick={handleIncrementSession}
                            className={isStart ? 'disabled' : ''}>
                            +
                        </button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BreakSessionLabels