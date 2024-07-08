import { UrlLink } from "../components/navLinks"



export default function Home() {
    return (
        <div>
            <h1>Home page</h1>
            <UrlLink newURL={"/login"} label="Login" />
        </div>
    )
}