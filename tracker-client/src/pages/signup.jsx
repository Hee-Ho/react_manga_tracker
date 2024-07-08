

import { UInput, PInput } from "../components/uinputs"
import { useState } from "react"

export default function Signup() {
    
    const [username, setUser] = useState('');
    const [pw, setPw] = useState('');
    const [confpw, setConfPw] = useState('');

    function SubmitForm(){

        console.log(username)
    };


    return (
        <div>
            <form action={SubmitForm}>
                <h1>Sign up page</h1>
                <UInput updateUser={setUser}/>
                <PInput text="Password: "/>
                <PInput text="Confirm Password: "/>
                <button type="submit">Submit</button>
            </form>
        </div>
        
    )

}