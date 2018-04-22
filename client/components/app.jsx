import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Selections from './Selections'
import Instructions from './Instructions'
import PrideVector from './Pride/PrideVector'
import SadnessVector from './Sadness/SadnessVector'
import ShameVector from './Shame/ShameVector'
import DisgustVector from './Disgust/DisgustVector'



// app should be just a series of route
const App = () => {
  return (
  <Router>
    <div>
  
     
      <Route exact path = '/' component = {Instructions} />
      <Route exact path = '/' component = {Selections} />
      <Route exact path = '/' component = {PrideVector} />
      <Route exact path = '/' component = {SadnessVector} />
      <Route exact path = '/' component = {ShameVector} />
      <Route exact path = '/' component = {DisgustVector} />
      

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