
import "./navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { UserContext, UIDContext } from "../../App"
import { useContext } from "react";
import { ProfilePage } from "../../pages/ProfilePage/profilePage"
const NavigationBar = () => {

  const userName = useContext(UserContext)
  const UID = useContext(UIDContext)
  const profileLink = '/user/' + UID;
  return (
      <nav className="nav-bar"> 
        <div className="site-icon"> Manga Tracker </div>
        <ul>
          <CustomLink to="/" text="Home"> </CustomLink>
          <CustomLink to="/testManga" text="Manga"> </CustomLink>
          {userName!="" 
          ? <CustomLink to={profileLink} text={userName}> </CustomLink>
          :<CustomLink to="/login" text="Login"> </CustomLink>
          }
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