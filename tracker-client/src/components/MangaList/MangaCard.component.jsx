import "./MangaCard.css"
import { useNavigate } from "react-router-dom";

const MangaCard = ({manga}) => {
  const {fileName, title_en, id} = manga;
  const navigate = useNavigate();
  const image_url = `https://uploads.mangadex.org/covers/${id}/${fileName}`
  
  const openMangaInfo = () => {
    navigate(`../testManga/manga/${id}`)
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