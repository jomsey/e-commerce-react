import "./Pagination.css"
import PropTypes  from 'prop-types';
export default function Pagination({pageSize,itemsCount,onPageChange,currentPage}) {
  const numberOfPages= Math.ceil(itemsCount/pageSize)
  if (numberOfPages<=1)return null;
 
  let pages = paginate(currentPage,numberOfPages, 7);

  return (
    <div className="pagination">
       {pages.map(page=> <span className={currentPage===page?"page active":"page"} 
                               key={page} 
                               onClick={()=>onPageChange(page)}>{page}</span>)}
    </div>
  )
}

function paginate(_currentPage, totalPages, maxPages) {
          let _pages = [];
          // Determine the range of pages to display
          let startPage = 1;
          let endPage = totalPages;
          
          if (totalPages > maxPages) {
              let halfMaxPages = Math.floor(maxPages / 2);
              startPage = Math.max(_currentPage - halfMaxPages, 1);
              endPage = startPage + maxPages - 1;
              if (endPage > totalPages) {
                endPage = totalPages;
                startPage = endPage - maxPages + 1;
              }
          }

          // Add "..." before and/or after the truncated pages
          if (startPage > 1) _pages.push('...');
          
          for (let i = startPage; i <= endPage; i++) {
            _pages.push(i);
          }
          if (endPage < totalPages) {
            _pages.push('...');
          }

          return _pages;
}

Pagination.prototype={
        pageSize:PropTypes.number.isRequired,
        itemsCount:PropTypes.number.isRequired,
        onPageChange:PropTypes.func,
        currentPage:PropTypes.number
}