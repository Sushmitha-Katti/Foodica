import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";
const Recipes = (props) => {

    const APP_ID = '8e782269';
    const APP_KEY = '05d76b0b8aba5df3148297be5b806669';
  
    const [recipes, SetRecipies] = useState([]);
    const [search, setSearch] = useState("");
    const [query, SetQuery] = useState(props.location.state.response);
  
    console.log(props.location.state);
    useEffect(() => {
        console.log("THIS IS CALLED");
        console.log(query);
        getRecipies();
      },[query]); 
    
      const getRecipies = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        
        SetRecipies(data.hits);
      }

      const getSearch = e => {
        e.preventDefault();
        SetQuery(search);
      
        
      }
    
      const updateSearch = e => {
        setSearch(e.target.value);
      }

    return(
        <>
        <div className = "Nav">
            <div className = "container">
        <div className = "row">
            <div className = "col-sm">
                <h5 className = "Navele" id = "brand">FoodieCa</h5>
            </div>
            <div className = "col-sm">
        <form  className ="  recipe-form" onSubmit = {getSearch}>
            <input className = "  recipe-search-bar" type = 'text' value = {search} onChange = {updateSearch} />
            <button className = 'recipe-search-btn' type = 'submit'><i class="fa fa-search"></i></button>
        </form>
        </div>
        <div className = "col-sm">
            <a href = "/" style = {{color:"black"}}><h5 className = "Navele">Home</h5></a>

        </div>
   
        <div>

        </div>
        </div>
        </div>
        </div>


        <div class = "container">
           
            
           
            
               
        <div className = "row">
                 {recipes.map(recipe => 
        <div className = 'col-md-3'><Recipe recipe = {recipe} query = {query}/></div>
                    
      )}
       </div>
       </div>
       </>
                
                
     
    )
}

export default Recipes;