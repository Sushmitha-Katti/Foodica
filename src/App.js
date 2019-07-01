import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import Recipes from "./Recipes"
import background from "./background.jpg";
import Description from "./Description";
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";

import Home from './home';
import './App.css';
import Test from './Testfile'

const App = () => {
 
  return (
  <>
  
       <Router>
        <div>
          <Route path="/test" exact strict component={Test} />
          <Route path="/" exact strict component={Home} />
           <Route path = "/recipies" exact strict component = {Recipes} /> 
           <Route path = "/description" exact strict component = {Description} /> 
        
        </div>
      </Router>
  </>
   
  )
}
export default App;
