import { useState } from "react";
import MangaCardList from "../../components/MangaList/MangaCardList.component";
import { loadManga } from "../../actions/externalAPIaction";
import "./mangaPage.css"
import { useQuery } from "@tanstack/react-query";

const MangaPage = () => {
  const [search, setSearch] = useState(""); 

  let {data, isLoading, isError} = useQuery({
    queryKey: ["mangaList"],
    queryFn:  () => loadManga()
  });
  //setting the search text
  const setSearchString = e => {
    setSearch(e.target.value);
  } 

  const onSearchClick = () => {
    //make it move to another page?
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

  console.log(data);
  return (
    <div className="manga-page"> 
      <input type="search" className="manga-search" onChange={setSearchString}/>
      <button> Search </button>
      <MangaCardList mlist={data}> </MangaCardList>
    </div>
  )
}

export default MangaPage;