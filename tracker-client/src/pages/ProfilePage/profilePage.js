import UserProfile from "../../components/ProfileSideBar/UserProfile.component"
import {  useParams } from "react-router-dom";
import "./profilePage.css";

const ProfilePage = () => {
  let {user_id} = useParams();
  return (
    <div className="profile-page">
      <UserProfile className="sidebar" user_id={user_id}> </UserProfile>
      <main className="content"> 
        <h4> Content </h4>
      </main>
    </div>
  )
}

export default ProfilePage;