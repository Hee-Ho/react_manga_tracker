import { useParams } from "react-router-dom";

export default function UserInfo() {

    const uid = useParams().userID


    return (
        <div>
            <label>{uid}</label>
        </div>
    )
}