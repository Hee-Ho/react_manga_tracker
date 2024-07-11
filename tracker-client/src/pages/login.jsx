

import { Link } from "react-router-dom"
import { LoginUser } from "../actions/useraction";

export default function Login() {

    const SubmitForm = async (formData) => {

        formData.preventDefault()

        const data = {
            email: formData.target.email.value,
            pw: formData.target.pw.value,
        }

        await LoginUser(data)
    };


    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={SubmitForm}>
                <div>
                    <label>Email: </label>
                    <input name="email" type="email" minLength={3} placeholder="example@gmail.com" size={40} required/>
                </div>
                <div>
                    <label>Password: </label>
                    <input name="pw" type="password" minLength={1} placeholder="Password" size={40} required/>
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