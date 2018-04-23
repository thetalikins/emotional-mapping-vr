import React from 'react'
import { HashRouter as Router, Route, Link} from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch'
 


const ShameVector = () => {
    return (
      <Router>
       <div>
       <P5Wrapper sketch={sketch} />
      </div>
    </Router>
    )
}


export default ShameVector