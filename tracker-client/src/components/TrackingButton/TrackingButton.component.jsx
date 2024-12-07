import "./TrackingButton.styles.css"
import { useNavigate } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
import { MdBlock } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa"; //temp usage
import { useQuery, QueryClient } from "@tanstack/react-query";
import { useUser } from "../../UserContext";
import { addToTracking, removeFromTracking, getTrackingStatus } from "../../actions/mangaAction";
import { useEffect, useState } from "react";


const TrackingButton = ({manga}) => {
  const [tracking, setTracking] = useState(false);
  const { UserID } = useUser()
  const navigate = useNavigate()
  const queryClient = new QueryClient()
  if (UserID < 0) { //clear cache
    queryClient.removeQueries(["trackingStatus"])
  }
  let { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["trackingStatus"],
    queryFn: () => getTrackingStatus(manga.id),
    enabled: UserID > 0, //execute only when UID exist
  });

  useEffect(() => {
    if (isSuccess && data) {
      console.log(data)
      setTracking(data);
    }
  }, [data, isSuccess, manga.id]);
  
//Need to add function to update cache or make backend return the new user tracking list
  const addToTrackingClick = () => {
    try {
      if (UserID > 0) {
        const status = addToTracking(manga)
        if (status) {
          setTracking(true)
        }
      }
      else {
        alert("Log in to add manga to tracking list")
        navigate("/login")
      }
    }
    catch {
      alert("An error has occurred")
    }
  }

  const removeFromTrackingClick = () => {
    try {
      if (UserID > 0) {
        const status = removeFromTracking(manga)
        if (status) {
          setTracking(false)
        }
      }
    } 
    catch {
      alert("An error has occurred")
    }
  }

  if (isError) {
    return (
      <div className="button-container" id="error">
      Error
      <MdBlock/>
    </div>
    )
  }

  if (tracking) {
    return (
      <div className="button-container" onClick={removeFromTrackingClick}>
        Tracking 
        <FaThumbsUp />
      </div>
    )
  }
  else { //need to redirect if not logged in
    return (
      <div className="button-container" onClick={addToTrackingClick}>
        Add Tracking
        <FaRegStar/>
      </div>
    )
  }
}

export default TrackingButton;