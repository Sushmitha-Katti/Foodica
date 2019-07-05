import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import './App.css';
const Description = (props) => {
    const recipe =  props.location.state.recipeDescription;
    return(
        <>
        <div className = "container" style  = {{marginTop  : 2 + "rem"}}>
        
            <div className = "row">
                <div className = "col-md-10">
                    <h1 style = {{textAlign:"center", marginBottom  : 2 + "rem"}}>{recipe.label}</h1>
                </div>
                <div className = "col-md-2">
                
                <bold className = "cal-val">{recipe.calories.toFixed(2)}</bold>
                <div className = "cal"> <b className = "curve">calories</b>
                </div>
                
                </div>

            </div>
            <div className = "row" style  = {{marginBottom  : 2 + "rem"}}>
            
           
            {recipe.cautions.map(caution =><div className = "col-md-2"> <h5 className = "caution">{caution}</h5></div>)}
            {recipe.dietLabels.map(diet => <div className = "col-md-2"><h5 className = "diet">{diet}</h5></div>)}
            {recipe.healthLabels.map(health =><div className = "col-md-2"> <h5 className = "health">{health}</h5></div>)}
            
        </div>
            <div className = "row">
                <div className = "col-md-6">
                    <img className = "d-image" src = {recipe.image} alt = ""/>

                </div>
                <div className = "col-md-6">
                
                
                    <h3 className = "desc-what">What you need</h3>
                    {recipe.ingredientLines.map(ing => <li>{ing}</li>)}
        
                </div>

            </div>
            <div className = "row" style  = {{marginTop  : 1 + "rem"}}>
                <div className = "col-md-6">
                <div className = "row">
                <div className = "col-md-7">
                <h5 className = "prep">Preparation Time: {recipe.totalTime > 0?recipe.totalTime:"30" } min</h5>
                </div>
                <div className = "col-md-5">

                <h5 className = "prep">Yield: {recipe.yield} people</h5>
                     
                </div>
            </div>
               
             
                </div>

            </div>

            

            

        </div>
        <div className = "row justify-content-md-center foot" style  = {{marginTop  : 2 + "rem"}}>
        <div className = "col-md-4">
        <a href ={recipe.url} target = "blank" ><h5 className = "src" style = {{color:"purple"}}>Source : {recipe.source} </h5></a>
        
        </div>
        <div className = "col-md-auto back">
        <Switch>
                    <Link to ={{
                    pathname :"/recipies",
                    state: {query:props.location.state.query}}}>Back</Link>
        </Switch>
        </div>
    </div>
    </>
    )
}

export default Description;