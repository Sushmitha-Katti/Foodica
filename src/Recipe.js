import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import './App.css';
const Recipe = ({recipe,query}) => {
    return(
      
                
                   
                
                    
                        <Switch>
                    <Link to = {{
                    pathname :"/description",
                    state: { recipeDescription: recipe.recipe, query:query }}}>
                        <div className = " card recipe" >
                            
                        
                            <img style={{height:200+"px"}} className = 'card-img-top' src = {recipe.recipe.image} alt = ""/>
                            <h5 className = 'card-title recipe-title'>{recipe.recipe.label}</h5>
                           
                        </div>
                </Link>
                </Switch>
                    
                    
                   
              
              
      
    )
}

export default Recipe