// Import 
import { useState, useEffect } from 'react'
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import './pages.css'

export default function Vegan(){
    
    const[recipes, setRecipes] = useState(null);

    let category = "Vegan";

    // Get the data
    useEffect(() => {
        async function getRecipe() {
        
            try {
                
                let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
                
                const veganRecipe = response.data.meals;
                
                // set the previous state
                setRecipes(veganRecipe);
                
            } catch (error) {
                console.error(error.message);
            }
            
        }
        getRecipe();
    },[]);


    return (
        <>
            <div >
                <h1>Vegan Recipes</h1>
                <div className = "container">
                    <RecipeCard recipes = {recipes} />
                </div>
                
            </div>
        </>
    )
}