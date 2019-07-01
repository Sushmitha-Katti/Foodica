import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import Recipe from "./Recipe"
import background from "./background.jpg";
import { BrowserRouter as Router, Route, Link,Redirect} from "react-router-dom";
import './App.css';
import Test from './Testfile'

const Home = (props) => {
  const APP_ID = '8e782269';
  const APP_KEY = '05d76b0b8aba5df3148297be5b806669';

  const [recipes, SetRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, SetQuery] = useState("");


//   useEffect(() => {
//     getRecipies();
//   },[query]); 

//   const getRecipies = async () => {
//     const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
//     const data = await response.json();
    
//     SetRecipies(data.hits);
//   }

  const getSearch = e => {
    e.preventDefault();
    SetQuery(search);
    props.history.push("/recipies",{ response: search });
    
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  return (
    <div className = "App">
    <div className = "background">
    <img className = "background-img" src = {background} alt=""/>
      <div className = 'background-text'>
        <h1>Only For foodies</h1>
        <p>Start Browsing</p>
        <form  className = "form" onSubmit = {getSearch}>
        <input className = "search-bar" type = 'text' value = {search} onChange = {updateSearch} />
          <button className = 'search-btn' type = 'submit'><i class="fa fa-search"></i></button>
          
         
      
      </form>
     
      
        
      </div>

      </div>
  
     
      
      {/* {recipes.map(recipe => 
        <Recipe recipe = {recipe} />
      )}
        */}
    </div>
  );
}
export default Home;
