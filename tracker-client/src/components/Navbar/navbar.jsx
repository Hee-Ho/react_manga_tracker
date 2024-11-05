
import "./navbar.css";
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";
import { ProfilePage } from "../../pages/ProfilePage/profilePage"
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { getUser } from "../../actions/useraction";
import { useEffect } from "react";
import { LogoutUser } from "../../actions/useraction";
const NavigationBar = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient()
  //Make it refetch info everytime the page refresh
  const { Username, UserID, login, logout } = useUser()
  const {data, isSuccess} = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
    enabled: UserID > 0,
    refetchOnWindowFocus: true,
    refetchOnMount: true
    }
  )

  //update context on success
  useEffect( () => {
    if (UserID > 0) {
      if (isSuccess && data) {
        login(data.username, data.uid);
        queryClient.setQueryData(['user', data])
      }
    }
  }, [isSuccess, data, login, queryClient, UserID])
  
  //logging out 
  const logout_click = async(e) => {
    try {
      await LogoutUser()
      logout()
      alert("Logout successful")
      navigate("/")
    }
    catch (error) {
      alert(error)
      logout()
      navigate("/")
    }
  }

  const profileLink = '/user/' + UserID;
  return (
      <nav className="nav-bar"> 
        <div className="site-icon"> Manga Tracker </div>
        <ul>
          <CustomLink to="/" text="Home"> </CustomLink>
          <CustomLink to="/testManga?title=&page=1" text="Manga"> </CustomLink>
          {Username!=="" 
          ?
              <CustomLink to={profileLink} text={Username}> </CustomLink>
          : 
            <CustomLink to="/login" text="Login"> </CustomLink>
          }
        </ul>

        {Username!=="" && (
          <button className="logout-button" onClick={logout_click}> Logout </button>
        )}
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