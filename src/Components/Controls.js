import React, { Component } from 'react'
import playpause from '../img/playpause.png'
import refresh from '../img/refresh.png'

class Timer extends Component {
    render() {
        return (
            <div className="controls">
                <div id="start_stop">
                    <img src={playpause} alt="bouton play ou pause" />
                </div>
                <div id="reset">
                    <img src={refresh} alt="bouton refresh" />
                </div>
            </div>
        )
    }
}

export default Timer
