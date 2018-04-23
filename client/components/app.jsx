import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Selections from './Selections'
import Instructions from './Instructions'
import PrideVector from './Pride/PrideVector'
import SadnessVector from './Sadness/SadnessVector'
import ShameVector from './Shame/ShameVector'
import DisgustVector from './Disgust/DisgustVector'
import NostalgiaVector from './Nostalgia/NostalgiaVector'



const App = () => {
  return (
  <Router>
    <div>
    <div class="sixteen columns">
      <div class="seven columns offset-by-three">
        <Route path = '/' component = {Instructions} />
        <Route path = '/' component = {Selections} />
        <Route exact path = '/pride' component = {PrideVector} />
        <Route exact path = '/sad' component = {SadnessVector} />
        <Route exact path = '/shame' component = {ShameVector} />
        <Route exact path = '/disgust' component = {DisgustVector} />
        <Route exact path = '/nostalgia' component = {NostalgiaVector} />
        </div>
      </div>
    </div>
 </Router>
  )
}

export default App 
