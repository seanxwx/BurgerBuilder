import React from 'react';
// import {withRouter} from 'react-router-dom';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BugerIngredient';

const burger = (props) => {
    // console.log(props);
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i)=>{
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            });
            //reduce() is used to flatten the array, arr is previous array, el is current
        }).reduce((arr,el)=>{
            return arr.concat(el);
            //second para is initial array --[]
        },[]);

    // if(transformedIngredients.length === 0){
    //     transformedIngredients = <p>Please start adding ingredients!</p>
    // }
    // console.log(transformedIngredients);
    // .map( igKey => {
    //     return [...Array(props.ingredients[igKey])].map((_, i) => {
    //             return <BurgerIngredient key={igKey + 1} type={igKey} />;
    //     }); //[,]
    // });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};


export default burger;