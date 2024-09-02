

import { Link, useNavigate } from "react-router-dom"
import { LoginUser } from "../../actions/useraction";
import { useState, useContext } from "react";
import { UserContext } from "../../App"
import "./login.css"
export default function Login({setUser}) {

    // States to reset input fields on failed login
    const [username, setUsername] = useState("")
    const [pw, setPW] = useState("")

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
            setUser(data.username)
            success_redirect()
        } else {
            setUsername('')
            setPW('')
        }
    };


    return (
        <div class="loginArea">
            <div class="centerArea">
                <h1>Login page</h1>
                <form onSubmit={SubmitForm}>
                    <div class="formGrouping">
                        <div class="inputGrouping">
                            <label class="textLabel">Username: </label>
                            <input class="inputArea" value={username} onChange={UserChange} name="username" type="text" minLength={1} placeholder="Username" size={40} required/>
                        </div>
                        <div class="inputGrouping">
                            <label class="textLabel">Password: </label>
                            <input class="inputArea" value={pw} onChange={PWChange} name="pw" type="password" minLength={1} placeholder="Password" size={40} required/>
                        </div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <div>
                    <Link to={"/signup"}>Signup</Link>
                </div>
                <div>
                    <Link to={"/"}>Home</Link>
                </div>
            </div>
        </div>
    )

}