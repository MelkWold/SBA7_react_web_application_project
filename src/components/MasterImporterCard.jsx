import './MasterImporterCard.css';

export default function MasterImporterCard({ allRecipe }) {
    
    if(!allRecipe) {
        return <p> Loading recipes ...</p>
    }
    

    return (
        <div className = "allRecipeCardContainer">
                { allRecipe.map((food) => (
                <div key ={allRecipe.idMeal} className = "allRecipeCard">
                    <h2>{food.strMeal} </h2>
                    <li >{food.strCategory} ({food.strArea})</li><br/>
                    <img src= {food.strMealThumb} width= "500px" alt ={food.strMeal}/>
                    <h2> Cooking Instructions </h2>
                    <p >{food.strInstructions} </p><br/>

                </div>
            ))}
        </div>     
    );
}