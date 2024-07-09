

export default function Signup() {
    

    const SubmitForm = (formData) => {

        formData.preventDefault()

        console.log(formData.target.user.value,formData.target.pw.value,formData.target.confpw.value)
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
                    <label>Password: </label>
                    <input name="pw" type="password" minLength={1} placeholder="Password" size={40}  required/>
                </div>
                <label>Confirm Password: </label>
                <input name="confpw" type="password" minLength={1} placeholder="Password" size={40} required/>
                <button type="submit">Submit</button>
            </form>
        </div>
        
    )

}