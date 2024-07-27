import TrackingCard from "./TrackingCard.component";
import { getUserTracking } from "../../actions/mangaAction";

import "./TrackingCardList.css"

const TrackingCardList = () => {
  return (
    <div className="tracking-list"> 
      <h4>Tracking List </h4>
      <TrackingCard> </TrackingCard>
      <TrackingCard> </TrackingCard>
      <TrackingCard> </TrackingCard>
      <TrackingCard> </TrackingCard>
    </div>
  )

}

export default TrackingCardList;