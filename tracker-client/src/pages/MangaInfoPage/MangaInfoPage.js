import "./MangaInfoPage.css"
import { useQuery, useQueryClient} from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMangaByID } from "../../actions/externalAPIaction";
import TrackingButton from "../../components/TrackingButton/TrackingButton.component";
import { UserContext, UIDContext } from "../../UserContext";
import { useContext } from "react";

//need to handles null or id is directly entered
//get manga info from click
const MangaInfoPage = () => {
  //check if manga exist in user tracking list
  const { mangaID } = useParams(); 

  let { data, isLoading, isError} = useQuery({
    queryKey: ['mangaInfo'],
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
      <h1 className="title-box">  {data.title_en} </h1>
      <TrackingButton manga={data}> </TrackingButton>
      <h3 className="status-box"> status: {data.status} </h3>
      <p className="summary-box"> {data.summary} </p>
    </div>
  )
}

export default MangaInfoPage;