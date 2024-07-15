
// This import allows the dynamic URL routing based on manga ID
import { useParams } from "react-router-dom";

import Manga from "../components/manga";

export default function MangaInfo() {

    const manga_id = useParams()
    
    // Send the manga_ID to the manga component, let it do the querying

    return <Manga ID={manga_id.mangaID}/>

}