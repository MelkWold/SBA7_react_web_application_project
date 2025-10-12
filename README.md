# SBA 320: React Web Application Project

## Project Description and Features

The project focuses on collating international food recipes for health-conscious people that prepare and consume healthy diet at home. The data is obtained from the "The Meal DB" (https://www.themealdb.com/api.php) and accessed using the following APIs:

- All meals: https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}
- Vegetarian: https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}
- Vegan: https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}
- Miscellaneous: https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}

## Project organization
In the src directory, the files and directories needed in the project are arranged into the following directories and subdirectories:
### Components 
1. MasterImporter: contains "MasterImporter.jsx", "MasterImporterCard.jsx" and "MasterImporterCard.css"
2. NavBar: contains "NavBar.jsx" and "NavBar.css"
3. RecipeCard: contains "RecipeCard.jsx" and "RecipeCard.css"
4. Title: contains "Title.jsx" and "Title.css"

### Pages
1. "Home.jsx" and "Home.css"
2. Miscellaneous.jsx
3. "Vegan.jsx"
4. "Vegetarian.jsx"
5. "pages.css"

## Required dependencies that need to be installed
- Axios- `npm i axios`;
- React Router DOM - `npm i react-router-dom`

## Programming Languages, Tools and Frameworks used:

1. JavaScript
2. React
3. Axios
4. CSS
5. HTML

## React Hooks used:
- useState
- useEffect
- react-router-dom


## Reflection

- Not required in the project document
