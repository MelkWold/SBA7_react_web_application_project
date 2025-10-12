import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <ul className="navBarUl">
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          <Link to={"/allfood"}>Get Recipes</Link>
        </li>

        <li>
          <Link to={"/vegetarian"}>Vegetarian</Link>
        </li>

        <li>
          <Link to={"/vegan"}>Vegan</Link>
        </li>

        <li>
          <Link to={"/miscellaneous"}>Miscellaneous</Link>
        </li>

        
      </ul>
    </nav>
  );
}
