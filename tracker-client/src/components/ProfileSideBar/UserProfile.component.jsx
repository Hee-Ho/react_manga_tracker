import "./UserProfile.css";

const UserProfile = ({user_id}) => {
  return (
    <div className="profile-sidebar"> 
      <img className="profile-pic" src={`https://robohash.org/${user_id}`} alt="profile_card"/>
      <span>Profile details </span>
    </div>
  )
}


export default UserProfile;