
import { Link } from "react-router-dom"

// Component for returning styled link to a specific manga
export default function MangaLink({ID, manganame}){

    const link = '/manga/' + ID
    // Get the image to display as well
    return (
        <Link to={link}>{manganame}</Link>
    )
}