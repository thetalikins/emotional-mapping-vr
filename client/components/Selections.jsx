import React from 'react'
import { HashRouter as Router, Route, Link} from 'react-router-dom'

const Selections = () => {
    return (
        <Router>
        <div>
            <div className="dropdown">
                <Link className="button" to="/sad">Sadness</Link>
                <Link className="button" to="/pride">Pride</Link>
                <Link className="button" to="/disgust">Disgust</Link>
                <Link className="button" to="/shame">Shame</Link>
                </div>
            </div>


            {/* <div class="dropdown">
                <button onClick="selectTime()" class="dropdown">Select Timing</button>
                <div id="myDropdown 2" class="dropdown-content">
                    <a href="#">10 Seconds</a>
                    <a href="#">30 Seconds</a>
                    <a href="#">60 Seconds</a>
                </div>
            </div>  */}
        {/* </div> */}
        </Router>
    )
}

export default Selections