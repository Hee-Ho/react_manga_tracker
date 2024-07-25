import "./TrackingCard.css"
import cover from "../../images/cover.png"

const TrackingCard = () => {
  return (
    <div className="tracking-card"> 
      <img src={cover} width={'100rem'}/>
      <div className="title-status">
        <h6> Title </h6>
        <h6> Updated </h6>
      </div>
      
    </div>
  )
}

export default TrackingCard;