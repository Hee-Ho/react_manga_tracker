
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="nav-bar"> 
      <li>  
        <Link to="testManga"> Manga </Link>

      </li>
    </div>
  )
}

export default NavigationBar;