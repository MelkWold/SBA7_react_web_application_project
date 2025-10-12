// Import
import { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import './pages.css'

export default function Miscellaneous() {
  const [recipes, setRecipes] = useState(null);

  let category = "Miscellaneous";

  // Get the data
  useEffect(() => {
    async function getRecipe() {
      try {
        let response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );

        const miscellaneousRecipe = response.data.meals;

        setRecipes(miscellaneousRecipe);
      } catch (error) {
        console.error(error.message);
      }
    }
    getRecipe();
  }, []);

  return (
    <>
      <div >
        <h1>Miscellaneous Recipes</h1>
        <div className = "container">
            <RecipeCard recipes = {recipes} />
        </div>
    </div>
    </>
  );
}
