// import React from 'react';

// const Pagination = ({totalPost, postPerPage, currentPage, setCurrectPage}) => {
//     let pages = [];

//     for(let i = 1; i <= Math.ceil(totalPost / postPerPage); i++){
//         pages.push(i)
//     }
//     console.log({pages})
//     return (
//         <div className='w-full flex items-center justify-between p-10 '>
//             {
//                 pages?.map((page, index)=>{
//                     return <div key={index} className=''>
//                         <button className={`${page === currentPage ? "bg-orange-500" : "bg-blue-500"} text-white p-4 rounded-lg`} onClick={()=>setCurrectPage(page)}>{page}</button>
//                     </div>
//                 })
//             }
//         </div>
//     );
// };

// export default Pagination;

import React from "react";

const Pagination = ({ totalPost, postPerPage, currentPage, setCurrectPage }) => {
  const totalPages = Math.ceil(totalPost / postPerPage);
  const pages = [];
  
  // Add first few pages and ellipsis
  if (currentPage > 3) {
    pages.push(1, 2, "...");
  }
  
  // Add current page and neighbors
  for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
    pages.push(i);
  }
  
  // Add ellipsis and last few pages
  if (currentPage < totalPages - 2) {
    pages.push("...", totalPages);
  }

  const handlePageClick = (page) => {
    if (typeof page === "number") setCurrectPage(page);
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      {/* Previous button */}
      <button
        className={`px-4 py-2 rounded border-2 border-gray-950  ${currentPage === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-blue-500 text-black hover:text-white"}`}
        disabled={currentPage === 1}
        onClick={() => setCurrectPage(currentPage - 1)}
      >
        Previous
      </button>

      {/* Page buttons */}
      {pages.map((page, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded border ${
            page === currentPage
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-200"
          } ${page === "..." ? "cursor-default" : ""}`}
          onClick={() => handlePageClick(page)}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}

      {/* Next button */}
      <button
        className={`px-4 py-2 rounded border-2 border-gray-950 ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : "hover:bg-blue-500 text-black hover:text-white"}`}
        disabled={currentPage === totalPages}
        onClick={() => setCurrectPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
