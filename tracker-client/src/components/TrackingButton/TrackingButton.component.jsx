import "./TrackingButton.styles.css"
import { useNavigate } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
import { MdBlock } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa"; //temp usage
import { useQuery, QueryClient } from "@tanstack/react-query";
import { getUserTracking } from "../../actions/mangaAction";
import { useUser } from "../../UserContext";
import { addToTracking, removeFromTracking } from "../../actions/mangaAction";


const TrackingButton = ({manga}) => {
  const { UserID } = useUser()
  const navigate = useNavigate()
  const queryClient = new QueryClient()
  if (UserID < 0) { //clear cache
    queryClient.removeQueries(["userTracking"])
  }
  let { data, isLoading, isError } = useQuery({
    queryKey: ["userTracking"],
    queryFn: () => getUserTracking(),
    enabled: UserID > 0, //execute only when UID exist
  });


//Need to add function to update cache or make backend return the new user tracking list
  const addToTrackingClick = () => {
    if (UserID > 0) {
      const status = addToTracking(manga)
      if (status) {
        console.log(data)
        data.append(manga)
      }
    }
    else {
      alert("Log in to add manga to tracking list")
      navigate("/login")
    }
  }

  const removeFromTrackingClick = () => {
    if (UserID > 0) {
      const status = removeFromTracking(manga)
      if (status) {
        console.log(data)
      }
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

  if (data && data.find(m => m.b_id === manga.id)) {
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