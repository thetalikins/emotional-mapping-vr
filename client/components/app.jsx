import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Selections from './Selections'
import Instructions from './Instructions'
import Vector from './Vector'

// app should be just a series of route
const App = () => {
  return (
  <Router>
    <div>
  
     
      <Route exact path = '/' component = {Instructions} />
      <Route exact path = '/' component = {Selections} />
      <Route exact path = '/' component = {Vector} />
      
  

 {/* <div className="container">
    <div className="row">
      <div className="one-half column" style="margin-top: 8%" style="margin-left: 15%">
       

    // <div className="heading">
    //   <div className="title">
    //     <h3>Processing Emotions</h3>
    //     <h4>A Visualization Tool by Theta Likins</h4>
    //   </div>        
    //   <div className="introduction">
    //     <p> Emotions arise and they fall. Select an emotion from the list below that can help you visualize your emotions as they arise within you and dissolve back into space.</p>
    //   </div>
    // </div> */}


     {/* // <div className="dropdown">
    // //     <button onClick="selectEmotion()" class="dropbtn">Select Emotion</button>

    // //     <div id="myDropdown 1" class="dropdown-content">
    // //     <a href="#">Anger</a>
    // //     <a href="#">Pride</a>
    // //     <a href="#">Shame</a>
    // //     </div>
    // //     <button onClick="selectTime()" class="dropbtn">Select Emotion</button>
    // //     <div id="myDropdown 2" class="dropdown-content">
    // //     <a href="#">10 Seconds</a>
    // //     <a href="#">30 Seconds</a>
    // //     <a href="#">60 Seconds</a>
    // //     </div>
    // // </div>


    // // <div className="visualizer">
    // //     <img src="images/sil1.jpg"></img>
    // // </div> */}


    {/* </div>
  </div>
 </div> */}
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