import React from "react";
import style from './recipe.module.css';
const recipe = props => {


  return (
    <div   className={style.recipee }> 

      <title>Recipe</title>
      <h1>{props.name} </h1>
      <img src={props.img} alt=""></img>
      <p className='cal' style={{color: "grey"  ,fontSize: "25px"}}>calories: {props.cal}</p>
      <ul>
        {props.ing.map(obj => (
          <li>{obj.text}</li>
        ))}
      </ul>
    </div>
  );
};
export default recipe;
