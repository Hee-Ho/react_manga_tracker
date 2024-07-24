// Small component that shows the users currently logged in account
import { useContext } from "react"
import { UserContext } from "../App"
import { Link } from "react-router-dom";

export default function User() {

    // logged_in is false when not logged in
    const logged_in = useContext(UserContext)

    return (
        <div>
            {logged_in 
            ? <div>{logged_in}</div> 
            : <div>
                <Link to={"/login"}>Login</Link>
            </div>
            }
        </div>
    )
}