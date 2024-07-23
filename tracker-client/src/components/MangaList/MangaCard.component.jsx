import "./MangaCard.css"
import cover from "../../images/cover.png"

const MangaCard = () => {
  return (
    <div className="mcard-container">
      <img src={cover} alt="Cover" width={"210px"} height={"250px"} loading="lazy"/>
      <h4 className="title"> title </h4>
    </div>

  )
}

export default MangaCard;