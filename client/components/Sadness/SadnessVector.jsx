import React from 'react'
import { HashRouter as Router, Route, Link} from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch'
 


const SadnessVector = () => {
    return (

      <Router>
       <div>
       <div className="guidance">
          <h4><b>Sadness</b> is often reported most predominantly between the heart and the guts</h4>
          <p>Bring to mind a time that you felt sad. As you meditate with the visualisation,
          see if you can track your own lived experience of <b>sadness</b>. Notice how the sensation arises, changes, and passes.
          </p>
          </div>
          <div className="sketch">
       <P5Wrapper sketch={sketch} />
          </div>
      </div>
    </Router>
    )
}


export default SadnessVector