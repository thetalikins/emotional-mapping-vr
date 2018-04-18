import React from 'react'
import { HashRouter as Router, Route, Link} from 'react-router-dom'

const Instructions = () => {
    return (
        <Router>
        <div>        
            <div class="heading">
                <div class="title">
                    <h3>Processing Emotions</h3>
                    <h4>A Visualization Tool by Theta Likins</h4>
                </div>        
                <div class="introduction">
                    <p> Emotions arise and they fall. Select an emotion from the list below that can help you visualize your emotions as they arise within you and dissolve back into space.</p>
                </div>
             </div>
        </div>
    </Router>
    )
}


    export default Instructions