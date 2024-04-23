import React from "react";

const Pagination = ({
  urlsPerPage,
  totalUrls,
  currentPage,
  handlePagination,
}) => {
  const totalPages = Math.ceil(totalUrls / urlsPerPage);
  const paginationNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className="pagination">
      {paginationNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={currentPage === pageNumber ? "active" : ""}
          onClick={() => handlePagination(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
