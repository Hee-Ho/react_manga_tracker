

import { UrlLink } from "../components/navLinks"



export default function Login() {

    return (
        <div>
            <h1>Login page</h1>
            <UrlLink newURL={"/signup"} label="Signup" />
        </div>
    )

}