import TrackingCard from "./TrackingCard.component";
import { getProfileTracking } from "../../actions/mangaAction";
import { useQuery } from "@tanstack/react-query";
import "./TrackingCardList.css"

const TrackingCardList = ({uid}) => {

  const {data, isError, isLoading } = useQuery({
    queryKey: ['profileTracking', uid], 
    queryFn: () => getProfileTracking(uid)
  });

  if (isLoading) {
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
      <TrackingCard manga_id={data[0].b_id} title={data[0].title_en}> </TrackingCard>
      <TrackingCard manga_id={data[1].b_id} title={data[1].title_en}> </TrackingCard>
    </div>
  )
}

export default TrackingCardList;