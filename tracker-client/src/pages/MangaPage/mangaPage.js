import { useState } from "react";
import MangaCardList from "../../components/MangaList/MangaCardList.component";
import { getManga } from "../../actions/externalAPIaction";
import "./mangaPage.css"
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

const MangaPage = () => {
  const [urlSearchParam, seturlSearchParam] = useSearchParams()
  const [search, setSearch] = useState();

  let {data, isLoading, isError} = useQuery({
    queryKey: ["mangaList"],
    queryFn:  () => getManga(urlSearchParam.get("title"))
  });
  //setting the search text
  const setSearchString = e => {
    setSearch(e.target.value);
  } 

  const onSearchClick = e => {
    //reload page with search param
    if (search === undefined) {
      return
    }
    seturlSearchParam({title: search});
    window.location.reload();
    
  }

  if (isLoading) {
    return (
      <p>Loading....</p>
    )
  }

  if (isError) {
    return (
      <p>Error!</p>
    )
  }

  return (
    <div className="manga-page"> 
      <input type="search" placeholder={urlSearchParam.get("title")} className="manga-search" onChange={setSearchString}/>
      <button onClick={onSearchClick}> Search </button>
      <MangaCardList mlist={data}> </MangaCardList>
    </div>
  )
}

export default MangaPage;