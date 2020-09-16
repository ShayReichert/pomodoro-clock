import React, { Component } from 'react'
import './App.scss'
import BreakSessionLabels from './Components/BreakSessionLabels'
import Timer from './Components/Timer'
import Controls from './Components/Controls'

class App extends Component {

   state = {
      sessionLength: Number.parseInt(25, 10),
      breakLength: Number.parseInt(5, 10),
      timerLabel: 'Session',
      timerLeftInSecond: Number.parseInt(25, 10) * 60,

      isStart: false,
      timerInterval: null
    }
  
  handleIncrementBreak = () => {
    if (this.state.breakLength < 60 && !this.state.isStart) {
      this.setState({
        breakLength: this.state.breakLength + 1
      })
    }
  }
  handleDecrementBreak = () => {
    if (this.state.breakLength > 1 && !this.state.isStart) {
      this.setState({
        breakLength: this.state.breakLength - 1
      })
    }
  }

  handleIncrementSession = () => {
    if (this.state.sessionLength < 60 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timerLeftInSecond: (this.state.sessionLength + 1) * 60
      })
    }
  }
  handleDecrementSession = () => {
    if (this.state.sessionLength > 1 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timerLeftInSecond: (this.state.sessionLength - 1) * 60
      })
    }
  }

  onReset = () => {
    const beepSound = document.getElementById('beep')
    this.setState({
      sessionLength: Number.parseInt(25, 10),
      breakLength: Number.parseInt(5, 10),
      timerLabel: 'Session',
      timerLeftInSecond: Number.parseInt(25, 10) * 60,
      isStart: false,
      timerInterval: null
    });
    beepSound.pause()
    beepSound.currentTime = 0
    this.state.timerInterval && clearInterval(this.state.timerInterval)

  }

  startStop = () => {
    const beepSound = document.getElementById('beep')

    if (!this.state.isStart) {
      this.setState({
        isStart: !this.state.isStart,
        timerInterval: setInterval(() => {
          this.decrementTimer()
          this.phaseControl()
        }, 1000)
      })
    } else {
      beepSound.pause()
      beepSound.currentTime = 0
      this.state.timerInterval && clearInterval(this.state.timerInterval)

      this.setState({
        isStart: !this.state.isStart,
        timerInterval: null
      });
    }
  }

  decrementTimer = () => {
    this.setState({
      timerLeftInSecond: this.state.timerLeftInSecond - 1
    })
  }

  phaseControl = () => {
    const beepSound = document.getElementById('beep')
    if (this.state.timerLeftInSecond === 0) {

      beepSound.play()

    } else if (this.state.timerLeftInSecond === -1) {
      if (this.state.timerLabel === 'Session') {
        this.setState({
          timerLabel: 'Break',
          timerLeftInSecond: this.state.breakLength * 60
        });
      } else {
        this.setState({
          timerLabel: 'Session',
          timerLeftInSecond: this.state.sessionLength * 60
        });
      }
    }
  }

  render() {
    const {
      breakLength,
      sessionLength,
      timerLeftInSecond,
      timerLabel,
      isStart
    } = this.state

    return (
      <div className="App">
        <div className="main-timer">

          <div className="head-timer">

            <BreakSessionLabels
              breakLength={breakLength}
              sessionLength={sessionLength}
              handleDecrementBreak={this.handleDecrementBreak}
              handleIncrementBreak={this.handleIncrementBreak}
              handleDecrementSession={this.handleDecrementSession}
              handleIncrementSession={this.handleIncrementSession}
              isStart={isStart}
            />

          </div>

          <div className="body-timer">
            <Timer
              timerLeftInSecond={timerLeftInSecond}
              timerLabel={timerLabel}
            />
            <Controls
              onReset={this.onReset}
              startStop={this.startStop}
            />
          </div>
          <audio id="beep" preload="auto" src="https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Electro%20and%20Synthetic/272[kb]super_mario_bros.aif.mp3"></audio>

        </div>
      </div>
    );
  }

}

export default App;
