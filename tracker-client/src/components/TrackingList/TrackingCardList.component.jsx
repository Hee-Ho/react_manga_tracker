import TrackingCard from "./TrackingCard.component";
import { getUserTracking } from "../../actions/mangaAction";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import "./TrackingCardList.css"

const TrackingCardList = () => {
  const navigate = useNavigate();
  const {data, isError, isLoading } = useQuery({
    queryKey: ['userTracking'], 
    queryFn: getUserTracking
  });

  if (isLoading) {
    return (
      <p>Loading....</p>
    )
  }

  if (isError) {
    alert("Session Expired!");
    navigate("/");
  }
  
  return (
    <div className="tracking-list"> 
      <h3>Tracking List </h3>
      {data.map((manga) => (
        <TrackingCard key={manga.b_id} manga={manga}> </TrackingCard>
      ))}
    </div>
  )
}

export default TrackingCardList;