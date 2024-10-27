import TrackingCard from "./TrackingCard.component";
import { getUserTracking } from "../../actions/mangaAction";
import { useQuery } from "@tanstack/react-query";
import "./TrackingCardList.css"

const TrackingCardList = () => {

  const {data, isError, isLoading } = useQuery({
    queryKey: ['userTracking'], 
    queryFn: getUserTracking
  });

  if (isLoading) {
    console.log(data)
    return (
      <p>Loading....</p>
    )
  }

  if (isError) {
    return (
      <p>Error!</p>
    )
  }

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