import styles from './placeHolder.module.css';
import React from 'react';
import { useState } from 'react';

const PlaceHolder = () => {
    const [ingredients, setIngredients] = useState(["chicken", "beef"]);
    const renderedIngredients = ingredients.map((ingredient) => {
        return (
            <li className={styles.bullets} key={ingredient}>{ingredient}</li>
        );
    })
    //this is the old way of handling form submission
    function handleOnSubmit(event) {
        event.preventDefault();
        alert("Submitted");
        const formData = new FormData(event.currentTarget);
        const newList = formData.get("ingredient");
        setIngredients(prev => [...prev, newList]);
        event.currentTarget.reset();
    }
    // this is the new way but it does not work on vite
    // function addInput(formData) {
    //     const newList = formData.get("ingredient");
    //     setIngredients(prev => [...prev, newList]);
    // }
    // <form className={styles.form} action={addInput}>
    return (
        <>
            <form className={styles.form} onSubmit={handleOnSubmit}>
                <label htmlFor="ingredients" className={styles.label}></label>
                <input 
                    type="text" 
                    id="ingredients"
                    name="ingredient"
                    placeholder="e.g. oregano" 
                    aria-label="Add Ingredient" 
                    className={styles.input}
                />
                <button className={styles.button}>Add ingredient</button>
            </form>
                <ul className={styles.ul}>
                    {renderedIngredients}
                
                </ul>
        </>
    );
};

export default PlaceHolder;