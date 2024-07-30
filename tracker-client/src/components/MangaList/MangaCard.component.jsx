import "./MangaCard.css"
import cover from "../../images/cover.png"

const MangaCard = ({manga}) => {
  const {fileName, title_en, id} = manga;
  const image_url = `https://uploads.mangadex.org/covers/${id}/${fileName}`
  return (
    <div className="mcard-container">
      <img  className="image-cell" src={image_url} alt="Cover" loading="lazy"/>
      <p className="title"> {title_en} </p>
    </div>

  )
}

export default MangaCard;