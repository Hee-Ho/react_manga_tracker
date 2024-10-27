
import "./navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useUser } from "../../UserContext";
import { ProfilePage } from "../../pages/ProfilePage/profilePage"
import { QueryClient, useQuery } from "@tanstack/react-query";
import { getUser } from "../../actions/useraction";
import { useEffect } from "react";
const NavigationBar = () => {
  const queryClient = new QueryClient()
  //Make it refetch info everytime the page refresh
  const { Username, UserID, login } = useUser()
  const {data, isSuccess} = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
    refetchOnWindowFocus: true
    }
  )

  //update context on success
  useEffect( () => {
    if (isSuccess && data) {
      login(data.username, data.uid);
      queryClient.setQueryData(['user', data])
    }
  }, [isSuccess, Username, UserID, login, queryClient])
  
  const profileLink = '/user/' + UserID;
  return (
      <nav className="nav-bar"> 
        <div className="site-icon"> Manga Tracker </div>
        <ul>
          <CustomLink to="/" text="Home"> </CustomLink>
          <CustomLink to="/testManga?title=&page=1" text="Manga"> </CustomLink>
          {Username!=="" 
          ? <CustomLink to={profileLink} text={Username}> </CustomLink>
          : <CustomLink to="/login" text="Login"> </CustomLink>
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