import React from 'react'
import { HashRouter as Router, Route, Link} from 'react-router-dom'

const Selections = () => {
    return (
        <Router>
        <div>

            <div class="dropdown">
                <button onClick="selectEmotion()" class="dropdown">Select Emotion</button>
                <div id="myDropdown 1" class="dropdown-content">
                    <a href="#">Sadness</a>
                    <a href="#">Pride</a>
                    <a href="#">Shame</a>
                </div>
            </div>


            <div class="dropdown">
                <button onClick="selectTime()" class="dropdown">Select Timing</button>
                <div id="myDropdown 2" class="dropdown-content">
                    <a href="#">10 Seconds</a>
                    <a href="#">30 Seconds</a>
                    <a href="#">60 Seconds</a>
                </div>
            </div> 
        </div>
        </Router>
    )
}

export default Selections