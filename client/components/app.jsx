import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Selections from './Selections'
import Instructions from './Instructions'
import PrideVector from './Pride/PrideVector'
import SadnessVector from './Sadness/SadnessVector'
import ShameVector from './Shame/ShameVector'
import DisgustVector from './Disgust/DisgustVector'


const App = () => {
  return (
  <Router>
    <div>
  
     
      <Route path = '/' component = {Instructions} />
      <Route path = '/' component = {Selections} />
      <Route exact path = '/pride' component = {PrideVector} />
      <Route exact path = '/sad' component = {SadnessVector} />
      <Route exact path = '/shame' component = {ShameVector} />
      <Route exact path = '/disgust' component = {DisgustVector} />
      

    </div>
 </Router>
 

  )
}

export default App 



// //-----------------------------these functions to select/route the user input 

// selectEmotion() =>


// selectTime() =>

// //-------------------------------functions below for each emotional animation

// Anger() => {

// };

// Pride() => {

// };

// Shame() => {

// };