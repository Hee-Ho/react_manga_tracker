// navigation / URL changes
import { Link } from "react-router-dom"

export function UrlLink({newURL, label}) {
    return (
        <Link to={newURL}>
            {label}
        </Link>
    )
}