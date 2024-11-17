import "./TrackingCard.css"
import { useNavigate } from "react-router-dom"

const TrackingCard = ({manga}) => {
  const {image_path, b_id, title_en, status_name, updatedAt} = manga
  const image_url = `https://uploads.mangadex.org/covers/${b_id}/${image_path}`
  const navigate = useNavigate();

  const openMangaInfo = () => {
    navigate(`../testManga/manga/${b_id}`)
  }
  //should add a click on card to remove from tracking (but will need to add undo)
  return (
    <div className="tracking-card" onClick={openMangaInfo}> 
      <img src={image_url} width={'150rem'} alt="cover" loading="lazy"/>
      <div className="title-status">
        <h3> {title_en} </h3>
        <h5> Status: {status_name} </h5>
        <h5> Last Updated: {convertDate(updatedAt)} </h5>
      </div> 
    </div>
  )
}

const convertDate = (date) => {
  const isoString = new Date(date).toISOString();
  const formatted = isoString.split("T")[0];
  return formatted;
}

export default TrackingCard;