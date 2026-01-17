import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-5 py-2 rounded-full bg-gray-800 text-white disabled:opacity-40"
      >
        Prev
      </button>

      <span className="font-semibold">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-5 py-2 rounded-full bg-gray-800 text-white disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
