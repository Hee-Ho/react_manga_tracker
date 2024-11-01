import "./TrackingCard.css"
import cover from "../../images/cover.png"

const TrackingCard = ({manga_id, title}) => {
  return (
    <div className="tracking-card"> 
      <img src={cover} width={'100rem'}/>
      <div className="title-status">
        <h6> Title: {title} </h6>
        <h6> manga_id: {manga_id} </h6>
      </div>
      
    </div>
  )
}

export default TrackingCard;