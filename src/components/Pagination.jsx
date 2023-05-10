import React from 'react'
import "./Pagination.css"

function Pagination({currentPage=1,onPageClick,maxPages=8,
                     totalPages,usePageControls=true,onNextClick,onPreviousClick}) {
  const pages = pagination(totalPages,maxPages,currentPage)

  return (
    <div className='pagination'>
       { currentPage >1 && usePageControls &&<>
        <span className='control' onClick={onPreviousClick}>Previous</span></> }
        {pages.map(page=><span onClick={page !== '..' && (()=>onPageClick(page))}
         className={currentPage===page?'page active':'page'}
         key={page}>{page}</span>)}
       {currentPage < totalPages && usePageControls && <span className='control' onClick={onNextClick}>Next</span>}
    </div>
  )
}


function pagination(totalPages,maxPages,currentPage){
    let pages = [];
    let startPage = 1;
    let moveStartPage = 3; //pages before the  current page
  
    if(currentPage>=maxPages && maxPages !== totalPages ){
      startPage = currentPage-moveStartPage
      maxPages = (currentPage+maxPages)-(moveStartPage+1)
    }

    for (let page = startPage; page <maxPages+1; page++)page<=totalPages && pages.push(page);
    if(totalPages>maxPages && currentPage !== totalPages) pages.push("..");
   
    return pages
}
export default Pagination 