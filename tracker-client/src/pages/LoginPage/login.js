

import { Link, useNavigate } from "react-router-dom"
import { LoginUser } from "../../actions/useraction";
import { useState, useContext } from "react";
import { UserContext } from "../../App"
import "./login.css"
export default function Login({setUser, setUID}) {

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

    const signup_redirect = () => {
        navigate('/signup')
    }

    const SubmitForm = async (formData) => {

        formData.preventDefault()

        const data = {
            username: formData.target.username.value,
            pw: formData.target.pw.value,
        }
        const stat = await LoginUser(data)
        if (stat) {
            setUser(stat.username)
            setUID(stat.uid)
            success_redirect()
        } else {
            setUsername('')
            setPW('')
        }
    };


    return (
        <div className="loginArea">
            <div className="centerArea">
                <h1>Login to your account</h1>
                <hr />
                <div className="space"/>
                <form onSubmit={SubmitForm}>
                    <div className="formGrouping">
                        <div className="inputGrouping">
                            <label className="textLabel">Username: </label>
                            <input className="inputArea" value={username} onChange={UserChange} name="username" type="text" minLength={1} placeholder="Username" size={40} required/>
                        </div>
                        <div className="inputGrouping">
                            <label className="textLabel">Password: </label>
                            <input className="inputArea" value={pw} onChange={PWChange} name="pw" type="password" minLength={1} placeholder="Password" size={40} required/>
                        </div>
                        <div className="space"/>
                        <button type="submit">Login</button>
                        <button className="signup" type="button" onClick={signup_redirect}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )

}