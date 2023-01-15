import "./Pagination.css"
import _, { ceil } from "lodash"
import { useState } from 'react';

export default function Pagination({pageSize,itemsCount,onPageChange,currentPage}) {
  const numberOfPages= ceil(itemsCount/pageSize)
  if (numberOfPages<=1)return null;
  const pages = _.range(1,numberOfPages+1)

  return (
    <div className="pagination">
       {pages.map(page=> <span className={currentPage===page?"page active":"page"} 
                               key={page} 
                               onClick={()=>onPageChange(page)}>{page}</span>)}
    </div>
  )
}
