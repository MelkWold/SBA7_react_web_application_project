import axios from 'axios';
import { useState, useEffect } from "react";
import MasterImporterCard from "./MasterImporterCard"
import '../../pages/pages.css';

export default function Masterimporter() {

    // Define states needed
    const[recipes, setRecipes] = useState(null);

    // Make users make choose cuisine
    const[foodName, setFoodName] = useState("Arrabiata");

    // Fetch recipes by name
    
    function handleChange(e){
        const food = e.target.value.toLowerCase();
        setFoodName(food);
    }

    useEffect(() => {

        async function getRecipe(){

            try {

                let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
                
                const data = response.data.meals;
    
                setRecipes(data || []);

            }catch(error){
                console.error(error.message)
            }
            
        }
    
        getRecipe();
        
    }, [foodName]);
    

    return(
        <>
            <div >
                <p className = "foodInputInstruction">Enter either <span style ={{color: "cyan"}}>food name </span> or <span style ={{color: "cyan"}}>the first letter of the food name</span> to find detailed recipes and descriptions. </p>
                
                <input
                    className = "foodInput"
                    placeholder= "Enter a food name or first letter of food name"
                    onChange= {handleChange}>
                </input>
                <p className ='exampleFoodList'>E.g. "Chicken Enchilada Casserole" or "C" without the quotes. </p>

                <div className = "container">
                    <MasterImporterCard recipes = {recipes} />
                </div>
                
            </div>
        </>
        
    )
}