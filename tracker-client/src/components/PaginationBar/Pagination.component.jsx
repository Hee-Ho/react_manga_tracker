import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "./Pagination.css"
 

const Pagination = ({total_result, current_page, searchParam = "", setSearchParams, reload}) => {
  //props needs: total pages
  let total_page = Math.ceil(total_result / 12);
  let page_array = []
  for (let i = 1; i <= total_page; i++)
    page_array.push(i)
  

  //previous and next page click--------------------------------------------------
  const previousClick = e => {
    if (Number(current_page) === 1) 
      return
    setSearchParams({title: searchParam, page: Number(current_page) - 1})
    reload();
  }

  const nextClick = e => {
    if (Number(current_page) === Math.ceil(total_result / 12))
      return
    setSearchParams({title: searchParam, page: Number(current_page) + 1})
    reload();
  }
  //-----------------------------------------------------------------------------
  
  return (
    <div className="pagination">
      <button className="page-bttn" id="previous" onClick={previousClick}> <SlArrowLeft color="black"/> </button>
      <form className="page-array">
         <input className="page-input" value={current_page} max={total_page}/> 
         <p> of {total_page}</p>
      </form>
        <button className="page-bttn" id="next" onClick={nextClick}> <SlArrowRight color="black"/> </button>
    </div>
  )
}

export default Pagination;