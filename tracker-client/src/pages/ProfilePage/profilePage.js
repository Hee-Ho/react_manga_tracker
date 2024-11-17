import {  useParams } from "react-router-dom";
import "./profilePage.css";
import TrackingCardList from "../../components/TrackingList/TrackingCardList.component";
import profile_pic from "../../images/blank-profile-picture.png"

const ProfilePage = () => {
  const user_id = useParams().uid;
  return (
    <div className="profile-page">
    <div className="profile-sidebar"> 
    <img className="profile-pic" src={profile_pic} alt="profile_card"/>
    <span>Profile details </span>
  </div>
      <main className="content"> 
        <TrackingCardList> </TrackingCardList>
      </main>
    </div>
  )
}

export default ProfilePage;