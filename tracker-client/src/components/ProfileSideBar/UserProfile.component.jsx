import "./UserProfile.css";
import { GetUsername } from "../../actions/useraction";
import { useState } from "react";

const UserProfile = ({user_id}) => {

  const [username, setUsername] = useState("")

  const Username = async() => {
    setUsername(await GetUsername(user_id))
  }

  Username();

  return (
    <div className="profile-sidebar"> 
      <img className="profile-pic" src={`https://robohash.org/${user_id}`} alt="profile_card"/>
      <label className="username">{username}</label>
    </div>
  )
}


export default UserProfile;