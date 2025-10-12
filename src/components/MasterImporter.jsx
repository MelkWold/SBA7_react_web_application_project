import axios from 'axios';
import { useState, useEffect } from "react";
import MasterImporterCard from "./MasterImporterCard"
import '../pages/pages.css';

export default function Masterimporter() {

    // Define states needed
    const[allRecipe, setAllRecipe] = useState(null);

    // Fetch recipes by name
    
    useEffect(() => {

        async function getAllRecipe(){

            try {

                let response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
                
                const data = response.data.meals;
    

                setAllRecipe(data);

            }catch(error){
                console.error(error.message)
            }
            
        }
    
        getAllRecipe();
        
    }, []);
    

    return(
        <>
            <div >
                <h1>All Recipes</h1>
                <div className = "container">
                    <MasterImporterCard allRecipe = {allRecipe} />
                </div>
                
            </div>
        </>
        
    )
}