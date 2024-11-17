import "./UserProfile.css";
import profile_pic from "../../images/blank-profile-picture.png"

const UserProfile = ({user_id}) => {
  return (
    <div className="profile-sidebar"> 
      <img className="profile-pic" width={"300rem"} src={profile_pic} alt="profile_card"/>
      <span>Profile details </span>
    </div>
  )
}


export default UserProfile;