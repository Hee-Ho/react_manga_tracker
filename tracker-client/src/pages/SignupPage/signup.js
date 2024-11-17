
import { Link, useNavigate } from "react-router-dom";
import { CreateUser } from "../../actions/useraction"
import "./signup.css"
export default function Signup() {
    
    const navigate = useNavigate();

    const login_redirect = () =>{
        navigate('/login')
    }
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
        <div className="signupArea">
            <div className="centerArea">
                <h1>Sign up</h1>
                <hr />
                <div className="space" />
                <form onSubmit={SubmitForm}>
                    <div className="formGrouping">
                        <div className="inputGrouping">
                            <label className="textLabel">Username: </label>
                            <input className="inputArea" name="user" type="text" minLength={1} maxLength={40} placeholder="Username" size={40} required/>
                        </div>
                        <div className="inputGrouping">
                            <label className="textLabel">Email: </label>
                            <input className="inputArea" name="email" type="email" minLength={3} placeholder="example@gmail.com" size={40} required/>
                        </div>
                        <div className="inputGrouping">
                            <label className="textLabel">Password: </label>
                            <input className="inputArea" name="pw" type="password" minLength={1} placeholder="Password" size={40} required/>
                        </div>
                        <div className="inputGrouping">
                            <label className="textLabel">Confirm Password: </label>
                            <input className="inputArea" name="confpw" type="password" minLength={1} placeholder="Password" size={40} required/>
                        </div>
                        <div className="space" />
                        <button type="submit">Submit</button>
                        <button className="login" type="button" onClick={login_redirect}>Return to login</button>
                    </div>
                </form>
            </div>
        </div>
    )

}