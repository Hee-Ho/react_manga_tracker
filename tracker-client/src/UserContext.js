//For saving user information when logged in
import { createContext, useCallback, useContext, useState } from "react";

//attempt to retrieve info here
const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [Username, setUsername] = useState("");
  const [UserID, setUserID] = useState(-1);

  //useCallback memoize the login function so that it can act as an dependencies in the useEffect
  const login = useCallback((username, uid) => {
    setUsername(username);
    setUserID(uid);
  }, [])

  const logout = () => {
    setUsername("")
    setUserID(-1)
  } 

  return (
    <UserContext.Provider value = {{ Username, UserID, login, logout}}>
      {children}
    </UserContext.Provider>
  )
}

//custom hook for accessing to UserContext and methods in it 
export const useUser = () => {
  return useContext(UserContext)
}


