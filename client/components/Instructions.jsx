import React from 'react'
import { HashRouter as Router, Route, Link} from 'react-router-dom'

const Instructions = () => {
    return (
        <Router>
        <div> 
        <div class="sixteen columns">
            <div class="offset-by-one.column">
             
            <div className="heading">
                <div className="title">
                    <h1>Processing Emotions:</h1>
                    <h4>A visualization tool created by Delta Likins</h4>
                </div>        
                <div class="introduction">
                    <h6> Emotions arise and they fall. Select an emotion from the list below that can help you visualize your emotions. Look for any sensations within you that the visualization brings up, and track them as they arise within you and dissolve back into space.</h6>
                    <br/>
                    <h6>Please note, these content of these visualizations do not represent a universal experience. They are intended to be a simple animation of one place sensations might occur. </h6>
                </div>
             </div>

            </div>
        </div>  
        </div>
    </Router>
    )
}


    export default Instructions