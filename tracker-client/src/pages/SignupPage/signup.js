
import { Link } from "react-router-dom";
import { CreateUser } from "../../actions/useraction"

export default function Signup() {
    

    const SubmitForm = async (formData) => {

        formData.preventDefault()

        const data = {
            username: formData.target.user.value,
            email: formData.target.email.value,
            pw: formData.target.pw.value,
            conf: formData.target.confpw.value
        }

        await CreateUser(data)
    };


    return (
        <div className="userAccountInput">
            <form onSubmit={SubmitForm}>
                <h1>Sign up page</h1>
                <div>
                    <label>Username: </label>
                    <input name="user" type="text" minLength={1} maxLength={40} placeholder="Username" size={40} required/>
                </div>
                <div>
                    <label>Email: </label>
                    <input name="email" type="email" minLength={3} placeholder="example@gmail.com" size={40} required/>
                </div>
                <div>
                    <label>Password: </label>
                    <input name="pw" type="password" minLength={1} placeholder="Password" size={40} required/>
                </div>
                <label>Confirm Password: </label>
                <input name="confpw" type="password" minLength={1} placeholder="Password" size={40} required/>
                <button type="submit">Submit</button>
            </form>
            <div>
                <Link to={"/login"}>Login</Link>
            </div>
            <div>
                <Link to={"/"}>Home</Link>
            </div>

        </div>
        
    )

}