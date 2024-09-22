import { useEffect, useState } from "react";
import MangaCardList from "../../components/MangaList/MangaCardList.component";
import Pagination from "../../components/PaginationBar/Pagination.component";
import { getManga } from "../../actions/externalAPIaction";
import "./mangaPage.css"
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const MangaPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({title: "", page: '1'}); //set default to page 1
  const [search, setSearch] = useState(searchParams.get("title") || "");

  let {data, isLoading, isError} = useQuery({
    queryKey: ["mangaList", searchParams.get("title"), searchParams.get("page")],
    queryFn:  () => getManga(searchParams.get("title"), searchParams.get("page")),
  });

  useEffect( () => {
    setSearch(searchParams.get("title"))
  }, [searchParams]);

  //setting the search text
  const setSearchString = (e) => {
    setSearch(e.target.value);
  } 

  const onSearchSubmit = (e) => {
    //reload page with search param
    e.preventDefault();
    if (!search) {
      return
    }
    if (search != searchParams.get("title"))
      setSearchParams({ title: search, page: 1});
  }

  if (isError) {
    return (
      <p>Error!</p>
    )
  }

  return (
    <div className="manga-page"> 
      <form className="search-bar" onSubmit={onSearchSubmit}> 
        <input className="manga-search" type="search" value={search} onChange={setSearchString} />
      </form>
      <div> { 
        isLoading? 
        ( 
          <p>Loading....</p> 
        ) 
        : 
        (
          <div> 
            <MangaCardList mlist={data.mangas}> </MangaCardList>
            <Pagination total_result={data.total} current_page={searchParams.get("page")} searchParam={searchParams.get("title")} setSearchParams={setSearchParams}> </Pagination>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default MangaPage;