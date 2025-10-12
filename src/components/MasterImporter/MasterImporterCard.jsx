import './MasterImporterCard.css';

export default function MasterImporterCard({ recipes }) {
    
    if(!recipes) return <p> Loading recipes ...</p>
    if(recipes.length === 0) return <p>No recipes found. </p>
    

    return (
        <div className = "allRecipeCardContainer">
                { recipes.map((food) => (
                <div key ={food.idMeal} className = "allRecipeCard">
                    <h2>{food.strMeal} </h2>
                    <li >{food.strCategory} ({food.strArea})</li><br/>
                    <img src= {food.strMealThumb} width= "500px" alt ={food.strMeal}/>
                    <h2> Cooking Instructions </h2>
                    <p className= "instructions">{food.strInstructions} </p><br/>

                </div>
            ))}
        </div>     
    );
}