import React, { Component } from 'react'
import './App.scss'
import BreakLabel from './Components/BreakLabel'
import SessionLabel from './Components/SessionLabel'
import Timer from './Components/Timer'
import Controls from './Components/Controls'

class App extends Component {
  state = {
    breakLength: 5,
    sessionLength: 25,
    timeLeft: '25:00',
    timerLabel: 'session'
  }

  handleDecrement = (e) => {
    const target = e.target.id

    if (target === 'break-decrement') {
      // Ne rien faire si atteint zéro
      this.state.breakLength !== 0 &&
        this.setState({
          breakLength: (this.state.breakLength - 1)
        })
    } else if (target === 'session-decrement') {
      this.state.sessionLength !== 0 &&
        this.setState({
          sessionLength: (this.state.sessionLength - 1)
        })
    }
  }

  handleIncrement = (e) => {
    const target = e.target.id

    if (target === 'break-increment') {
      // Ne rien faire si atteint 60
      this.state.breakLength < 60 &&
        this.setState({
          breakLength: (this.state.breakLength + 1)
        })
    } else if (target === 'session-increment') {
      this.state.sessionLength < 60 &&
        this.setState({
          sessionLength: (this.state.sessionLength + 1)
        })
    }
  }

  render() {
    const { breakLength, sessionLength, timeLeft, timerLabel } = this.state

    return (
      <div className="App">
        <div className="main-timer">
          <div className="head-timer">
            <BreakLabel breakLength={breakLength} handleDecrement={this.handleDecrement} handleIncrement={this.handleIncrement} />
            <SessionLabel sessionLength={sessionLength} handleDecrement={this.handleDecrement} handleIncrement={this.handleIncrement} />
          </div>
          <div className="body-timer">
            <Timer timeLeft={timeLeft} timerLabel={timerLabel} />
            <Controls />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
