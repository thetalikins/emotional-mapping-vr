import React from 'react'
import { HashRouter as Router, Route, Link} from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch'
 


const NostalgiaVector = () => {
    return (

      <Router>
       <div>
       <div className="guidance">
          <h4><b>Nostalgia</b> is often reported most predominantly in the head and face.</h4>
          <h6>Bring to mind a time that you felt nostalgic. As you meditate with the visualization,
          see if you can track your own lived experience of <b>nostalgia</b>. Notice how the sensation arises, changes, and passes.
          </h6>
          </div>
          <div className="sketch">
       <P5Wrapper sketch={sketch} />
          </div>
      </div>
    </Router>
    )
}


export default NostalgiaVector