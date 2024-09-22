import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "./Pagination.css"
import { useEffect, useState } from "react";
 

const Pagination = ({total_result, current_page, searchParam = "", setSearchParams}) => {
  //props needs: total pages
  const [page, setPage] = useState(current_page);
  let total_page = Math.ceil(total_result / 12);
  
  const settingPage = (e) => {
    setPage(e.target.value);
  } 

  //for synching page number on display with the searchParams
  useEffect( () => {
    setPage(current_page);
  }, current_page);

  //previous and next page click--------------------------------------------------
  const previousClick = e => {
    if (page === 1) 
      return
    setSearchParams({title: searchParam, page: Number(page) - 1})
  }

  const nextClick = e => {
    if (Number(page) === Math.ceil(total_result / 12))
      return
    setSearchParams({title: searchParam, page: Number(page) + 1})
  }

  const onSubmitPage = (e) => {
    //reload page with search param
    e.preventDefault();
    if (!page) {
      return
    }
    if (page != current_page)
      setSearchParams({title: searchParam, page: page});
  }
  //-----------------------------------------------------------------------------
  
  return (
    <div className="pagination">
      <button className="page-bttn" id="previous" onClick={previousClick}> <SlArrowLeft color="black"/> </button>
      <form className="page-array" onSubmit={onSubmitPage}>
         <input className="page-input" value={page} max={total_page} onChange={settingPage} pattern="[0-9]{1,5}"/> 
         <p> of {total_page}</p>
      </form>
        <button className="page-bttn" id="next" onClick={nextClick}> <SlArrowRight color="black"/> </button>
    </div>
  )
}

export default Pagination;