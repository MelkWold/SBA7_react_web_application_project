import { Link } from 'react-router-dom';
import './NavBar.css'


export default function NavBar() {


    return (
        <nav width = {'100%'}>
            <ul className ="navBarUl">
                <Link to={'/'}><li>Home</li></Link>

                <Link to={'/vegan'}><li>Vegan</li></Link>

                <Link to={'/vegetarian'}><li>Vegetarian</li></Link>

            </ul>
        </nav>
    )
}