

import { Link, useNavigate } from "react-router-dom"
import { LoginUser } from "../actions/useraction";
import { useState, useContext } from "react";
import { UserContext } from "../App"

export default function Login() {

    // States to reset input fields on failed login
    const [username, setUsername] = useState("")
    const [pw, setPW] = useState("")

    // Set the user login if successful
    const {user, setUser} = useContext(UserContext)

    function UserChange(e) {
        setUsername(e.target.value)
    }
    function PWChange(e) {
        setPW(e.target.value)
    }

    const navigate = useNavigate();

    // hooks cant be used conditionally,
    // that is why this is in its own function
    const success_redirect = () => {
        navigate('/')
    }

    const SubmitForm = async (formData) => {

        formData.preventDefault()

        const data = {
            username: formData.target.username.value,
            pw: formData.target.pw.value,
        }

        if ((await LoginUser(data))) {
            success_redirect()
        } else {
            setUsername('')
            setPW('')
        }
    };


    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={SubmitForm}>
                <div>
                    <label>Username: </label>
                    <input value={username} onChange={UserChange} name="username" type="text" minLength={1} placeholder="Username" size={40} required/>
                </div>
                <div>
                    <label>Password: </label>
                    <input value={pw} onChange={PWChange} name="pw" type="password" minLength={1} placeholder="Password" size={40} required/>
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                <Link to={"/signup"}>Signup</Link>
            </div>
            <div>
                <Link to={"/"}>Home</Link>
            </div>
            
        </div>
    )

}