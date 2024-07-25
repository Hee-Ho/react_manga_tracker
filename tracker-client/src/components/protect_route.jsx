
import { CheckAuth } from "../actions/useraction";
import { Navigate } from "react-router-dom"

// Wrapper for routes that require privelages

// children are the components wrapped in this check
export const UserCheck = ({children}) => {

    // Query server to check if token is authorized. If so, return children
    // if not, then redirect to Login page or Unauthorized page

    // Query here
    const authorized = CheckAuth('/manga');
    console.log(authorized)

    return authorized ? children : <Navigate to='/login'/>

}