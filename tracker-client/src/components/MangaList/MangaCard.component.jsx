import "./MangaCard.css"
import cover from "../../images/cover.png"
import { useNavigate } from "react-router-dom";

const MangaCard = ({manga}) => {
  const {fileName, title_en, id} = manga;
  const navigate = useNavigate();
  const image_url = `https://uploads.mangadex.org/covers/${id}/${fileName}`
  const openMangaInfo = () => {
    const mangainfo = {
      image: fileName,
      title: title_en,
      id: id
    }
    navigate(`/testManga/manga/${id}`, {state: {mangaInfo: mangainfo} })
  }

  
  return (
    <div className="mcard-container" onClick={openMangaInfo}>
      <img className="image-cell" src={image_url} alt="Cover" loading="lazy"/>
      <div className="title"> {title_en} </div>
      <div className= "full-title"> {title_en} </div>
    </div>
  )
}

export default MangaCard;