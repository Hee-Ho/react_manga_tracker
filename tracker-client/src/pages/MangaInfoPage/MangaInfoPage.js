import "./MangaInfoPage.css"
import {useQuery} from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


//get manga info from click
const MangaInfoPage = () => {
  //check if manga exist in user tracking list
  const navigate = useNavigate();
  const status = true;
  const [tracking, setTracking] = useState(false);
  const state = useLocation(); //retrieve the state that was passed
  //need to handles null or id is directly entered
  const {image, title, id} = state.state.mangaInfo;
  const image_url = `https://uploads.mangadex.org/covers/${id}/${image}`
  
  return (
    <div className="mangaInfo-page"> 
      <img className="image-cell" src={image_url} loading="lazy"/>
      <div className="info"> 
        <h1> {title}</h1>
      </div>
    </div>
  )
}

export default MangaInfoPage;