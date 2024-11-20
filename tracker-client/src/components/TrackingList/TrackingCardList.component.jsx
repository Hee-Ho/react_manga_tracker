import TrackingCard from "./TrackingCard.component";
import { getProfileTracking } from "../../actions/mangaAction";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";
import "./TrackingCardList.css"

const TrackingCardList = () => {
  const { UserID } = useUser()
  const navigate = useNavigate();
  const {data, isError, isLoading } = useQuery({
    queryKey: ['profileTracking', UserID], 
    queryFn: () => getProfileTracking(UserID)
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