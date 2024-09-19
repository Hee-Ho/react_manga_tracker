
import "./navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavigationBar = () => {
  return (
      <nav className="nav-bar"> 
        <div className="site-icon"> Manga Tracker </div>
        <ul>
          <CustomLink to="/" text="Home"> </CustomLink>
          <CustomLink to="/testManga" text="Manga" > </CustomLink>
        </ul>
      </nav>
  )
}

//the Link component is essentially an <a>
const CustomLink = ({to, text,...props}) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end: true});
  return (
    <li className={isActive ? "active" : ""}> 
      <Link to = {to} {...props}> {text} </Link>
    </li>
  )
}

export default NavigationBar;