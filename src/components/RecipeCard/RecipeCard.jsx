import './RecipeCard.css'

export default function RecipeCard({ recipes }) {
    
    if(!recipes) {
        return <p> Loading recipes ...</p>
    }
    

    return (
        <div className = "recipeCardContainer">
                { recipes.map((recipe) => (
                <div key ={recipe.idMeal} className = "recipeCard">
                    <li >{recipe.strMeal} </li><br/>
                    <img src= {recipe.strMealThumb} width= "300px" alt ={recipe.strMeal}/>
                </div>
            ))}
        </div>     
    );
}