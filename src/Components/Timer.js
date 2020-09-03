import React, { Component } from 'react'

class Timer extends Component {
    render() {
        const { timeLeft, timerLabel } = this.props
        return (
            <div className="timer">
                <div id="time-left">{timeLeft}</div>
                <div id="timer-label">de <span>{timerLabel}</span></div>
            </div>
        )
    }
}

export default Timer
