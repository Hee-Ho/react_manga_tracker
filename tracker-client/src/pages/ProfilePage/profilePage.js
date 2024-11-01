import UserProfile from "../../components/ProfileSideBar/UserProfile.component"

import {  useParams } from "react-router-dom";
import "./profilePage.css";
import TrackingCardList from "../../components/TrackingList/TrackingCardList.component";

const ProfilePage = () => {
  const user_id = useParams().uid;
  
  return (
    <div className="profile-page">
      <UserProfile className="sidebar" user_id={user_id}> </UserProfile>
      <main className="content"> 
        <h4> Content </h4>
        <TrackingCardList uid={user_id}> </TrackingCardList>
      </main>
    </div>
  )
}

export default ProfilePage;