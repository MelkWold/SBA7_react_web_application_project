import './Home.css'

export default function Home(){
    
    return (
        <div className = "homeContainer">
            <h1>Welcome to Global Recipes!</h1>;
            <p className = "websiteDescription">This website is designed to give you the opportunity to choose recipes for healthy and delicious cuisines from all over the world. The website is mainly geared towards introducing you to various vegetarian, vegan and unique miscellaneous cuisines in addition to giving you the pleasure of choosing any type of food. </p>

            <p className = "websiteDescription"> Go ahead and get recipes either by <span style ={{color: "blue"}}>writing the name of any food</span> or <span style ={{color: "blue"}}> writing just the first letter</span> of the food name. </p>

            <p className = "websiteDescription">Some of the pages are still under construction. The future plan includes adding functionalities for you to click on any vegan, vegetarian or miscellaneous food category cards and get detailed recipe. Stay tuned!  </p>

        </div>
    
    )
}