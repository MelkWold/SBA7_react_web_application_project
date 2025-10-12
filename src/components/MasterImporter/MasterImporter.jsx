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
                <p className = "foodInputInstruction">Enter a food name to find recipes and details. </p>
                
                <input
                    className = "foodInput"
                    placeholder= "enter a food name to find recipe"
                    onChange= {handleChange}>
                </input>
                <p className ='exampleFoodList'>E.g. Apple Frangipan Tart, Bakewell tart, Chicken Enchilada Casserole, Dal Fry, Eton Mess </p>

                <div className = "container">
                    <MasterImporterCard recipes = {recipes} />
                </div>
                
            </div>
        </>
        
    )
}