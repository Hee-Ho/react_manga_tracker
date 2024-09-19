import { useState } from "react";
import MangaCardList from "../../components/MangaList/MangaCardList.component";
import Pagination from "../../components/PaginationBar/Pagination.component";
import { getManga } from "../../actions/externalAPIaction";
import "./mangaPage.css"
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const MangaPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({page: '1'}); //set default to page 1
  const [search, setSearch] = useState(searchParams.get("title") || "");
  const [currentPage, setCurrentPage] = useState(searchParams.get("page"));
  const navigate = useNavigate();

  let {data, isLoading, isError} = useQuery({
    queryKey: ["mangaList"],
    queryFn:  () => getManga(searchParams.get("title"), searchParams.get("page"))
  });
  //setting the search text
  const setSearchString = (e) => {
    setSearch(e.target.value);
  } 

  const onSearchClick = (e) => {
    //reload page with search param
    e.preventDefault();
    if (!search) {
      return
    }
    setSearchParams({ title: search, page: currentPage });
    navigate(0);
  }

  const reload = () => { //will change to useEffect instead
    navigate(0);
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
      <form className="search-bar" onSubmit={onSearchClick}> 
        <input className="manga-search" type="search" value={search} onChange={setSearchString}/>
      </form>
      <MangaCardList mlist={data.mangas}> </MangaCardList>
      <Pagination total_result={data.total} current_page={currentPage} searchParam={search} setSearchParams={setSearchParams} reload={reload}> </Pagination>
      
    </div>
  )
}

export default MangaPage;