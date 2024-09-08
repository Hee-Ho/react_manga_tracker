import "./MangaInfoPage.css"
import {useQuery} from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMangaByID } from "../../actions/externalAPIaction";


//get manga info from click
const MangaInfoPage = () => {
  //check if manga exist in user tracking list
  const { mangaID } = useParams(); 
  const navigate = useNavigate();
  //need to handles null or id is directly entered

  let { data, isLoading, isError} = useQuery({
    queryFn: () => getMangaByID(mangaID)
  })

  if (isLoading || mangaID !== data.id) { //Note to self: not too sure bout this condition 
    return (
      <p>Loading....</p>
    )
  }

  if (isError) {
    return (
      <p>Error!</p>
    )
  }
 
  let image_url = `https://uploads.mangadex.org/covers/${data.id}/${data.fileName}`
  return (
    <div className="mangaInfo-page"> 
      <img className="cover-cell" src={image_url} alt="Manga cover" loading="lazy"/>
      <div className="info"> 
        <h1 className="title-box">  {data.title_en} </h1>
        <h3 className="status-box"> status: {data.status} </h3>
        <p className="summary-box"> {data.summary} </p>
      </div>
    </div>
  )
}

export default MangaInfoPage;