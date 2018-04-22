import React from 'react'
import { HashRouter as Router, Route, Link} from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch'
 


const PrideVector = () => {
    return (

      <Router>
       <div>
       <P5Wrapper sketch={sketch} />
          {/* <div class="visualizer">
          <img src="images/sil1.jpg"></img>
          </div> */}
      </div>
    </Router>
    )
}


export default PrideVector