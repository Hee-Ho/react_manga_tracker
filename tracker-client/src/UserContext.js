//For saving user information when logged in
import { createContext, useContext, useState } from "react";

//attempt to retrieve info here
const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [Username, setUsername] = useState("");
  const [UserID, setUserID] = useState("");

  const login = (username, uid) => {
    setUsername(username)
    setUserID(uid)
  }

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


