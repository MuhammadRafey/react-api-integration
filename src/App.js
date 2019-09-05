import React, { useEffect, useState } from "react";
import Recipe from "./recipe";
import './app.css'
const App = () => {
  const id = "1f0d187a";
  const key = "78febbe58c3e01d2e2ebc7471337d6c5";
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState();
  const [query, setQuery] = useState();

  useEffect(() => {
    getData();
  }, [query]);
  


  const getData = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key} `
    );
    const data = await response.json();
    setRecipe(data.hits);
  };
const updateSearch=el=>{
setSearch(el.target.value);
el.preventDefault();
}
const queryFun=(e)=>{
  setQuery(search);
  e.preventDefault();
}

  return (
    <div className="App">
      <form className="searchForm">
        <input className ="inputSearch" type="text" value={search} onChange={updateSearch}></input>
        <button className="searchButton" onClick={queryFun} >search</button>
      </form>
      <div className='recipes'>
      {recipe.map(obj => (
      
        <Recipe
          key={obj.recipe.label}
          img={obj.recipe.image}
          name={obj.recipe.label}
          cal={obj.recipe.calories}
          ing={obj.recipe.ingredients}
        />
        
      ))}
      </div>
    </div>
  );
};

export default App;
