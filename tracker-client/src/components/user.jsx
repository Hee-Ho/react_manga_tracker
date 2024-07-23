// Small component that shows the users currently logged in account
import { useContext } from "react"
import { UserContext } from "../App"
import { Link } from "react-router-dom";

export default function User() {

    const logged_user = useContext(UserContext)

    return (
        <div>
            {logged_user 
            ? <div>{logged_user}</div> 
            : <div>
                <Link to={"/login"}>Login</Link>
            </div>
            }
        </div>
    )
}