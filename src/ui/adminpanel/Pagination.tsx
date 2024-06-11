import React, { useEffect, useState } from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  handlePageChange,
  rowsPerPage,
  setRowsPerPage,
}) => {
  const [inputRowsPerPage, setInputRowsPerPage] = useState(rowsPerPage);

  useEffect(() => {
    setInputRowsPerPage(rowsPerPage);
  }, [rowsPerPage]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputRowsPerPage(parseInt(e.target.value));
  };

  const handleRowsPerPageChange = () => {
    setRowsPerPage(inputRowsPerPage);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => handlePageChange(i)}>
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-between items-center mb-4 mt-10">
      <div>
        <label className="mr-2">Rows per page:</label>
        <input
          type="number"
          value={inputRowsPerPage}
          className="border border-gray-300 rounded px-2 py-1"
          onChange={handleInputChange}
        />
        <button
          onClick={handleRowsPerPageChange}
          className="ml-2 px-3 py-1 bg-green-500 text-white rounded"
        >
          Update
        </button>
      </div>

      <nav aria-label="Page navigation">
        <ul className="pagination flex row-auto">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link ml-2 px-3 py-1 bg-slate-500 text-white rounded"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {renderPageNumbers()}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link ml-2 px-3 py-1 bg-slate-500 text-white rounded ml-4"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
