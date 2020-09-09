import React, { Component } from 'react'


const timeFormatOk = (timerLeftInSecond) => {
    let minute = Math.floor(timerLeftInSecond / 60);
    if (minute < 10) minute = '0' + minute;
  
    let second = timerLeftInSecond - 60 * minute;
    if (second < 10) second = '0' + second;
  
    return `${minute}:${second}`;
  }


class Timer extends Component {
    render() {
        const { timerLabel } = this.props
        return (
            <div className="timer">
                <span id="time-left">{timeFormatOk(this.props.timerLeftInSecond)}</span>
                <div id="timer-label">de <span>{timerLabel}</span></div>
            </div>
        )
    }
}

export default Timer
