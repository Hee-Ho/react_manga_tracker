
import { CheckAuth } from "../actions/useraction";
import { Navigate } from "react-router-dom"
import { useEffect, useState } from "react";
// Wrapper for routes that require privelages

// children are the components wrapped in this check
export const UserCheck = ({children}) => {

    const [auth, setAuth] = useState(false)
    const [checking, setChecking] = useState(true)
    // Query server to check if token is authorized. If so, return children
    // if not, then redirect to Login page or Unauthorized page

    // Query here
    useEffect(() => {
        // useEffect to set state after querying for conditional return
        async function authorized(){
            if(await CheckAuth('/manga')){
                setAuth(true)
            }
        };

        authorized()
        setChecking(false);
    }, [])

    if (checking) {
        return (<label>Please wait</label>)
    }

    return auth ? children : <Navigate to='/login' />

}