
// This import allows the dynamic URL routing based on manga ID
import { useParams } from "react-router-dom";

import MangaLink from "../components/manga_link";




export default function MangaInfo() {

    const manga_id = useParams().mangaID



    // Do querying here, and properly display based on data
    // Just using default values for now to test actual changes without querying
    let title = null;
    let desc = null;
    
    if (manga_id === "6670ee28-f26d-4b61-b49c-d71149cd5a6e"){
        title = "Mieruko-chan"
        desc = "All of a sudden, Miko is able to see grotesque monsters all around her; but no one else can. Rather than trying to run away or face them, she instead musters all of her courage and… ignores them. Join in on her day-to-day life as she keeps up her best poker face despite the supernatural goings-on."
    } else {
        title = "Suki na Ko ga Megane wo Wasureta"
        desc = "Komura is a middle school boy who is head-over-heels in love with his next-seat neighbor Mie, a girl with terrible eyesight who just can't get used to carrying her glasses, often leaving them at home, or accidentally breaking them. He opts to help her as much as he possibly can, and through those efforts, she begins getting acquainted with his kindness. Will she reciprocate?\n\n---\nA delightfully charming romantic comedy about a boy who only has eyes for the girl who always forgets her glasses!\n\nWith the new school year comes a new homeroom, new classmates, and a new desk for the timid Komura. But any trepidation he might've felt quickly dissipates when he catches sight of Mie, his new seat neighbor.\n\nApt to quietly blurt out the most random things, the quirky Mie wears thick glasses that accentuate her lovely eyes, making Komura’s heart skip a beat!\n\nUnfortunately, Mie is pathologically forgetful and can never seem to remember to bring her glasses to class. It's not all bad, though! Her resulting squinty, mean-girl face sends Komura’s heart into overdrive too!\n\nWhile Komura is keen to help out and share his textbooks with Mie, will his heart give out from the almost daily strain of being up close and personal with his crush?!"
    }

    return (
        <div>
            <h1>{title}</h1>
            <label>{desc}</label>
        </div>
    )

}