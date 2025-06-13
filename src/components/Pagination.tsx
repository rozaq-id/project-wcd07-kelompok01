import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // Generate pagination range
  const getPageRange = (): (number | string)[] => {
    const range: (number | string)[] = [];

    // Always show first page
    range.push(1);

    // Calculate starting point
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);

    // Show ellipsis after first page if needed
    if (startPage > 2) {
      range.push("...");
    }

    // Add pages in the middle
    for (let i = startPage; i <= endPage; i++) {
      range.push(i);
    }

    // Show ellipsis before last page if needed
    if (endPage < totalPages - 1) {
      range.push("...");
    }

    // Always show last page if we have more than 1 page
    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range;
  };

  return (
    <div className="flex items-center justify-center mt-6 mb-4 select-none">
      {/* Previous button */}
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center justify-center w-8 h-8 mr-2 rounded-full 
          ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-200"
          }`}
      >
        <span className="sr-only">Previous</span>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      {/* Page numbers */}
      {getPageRange().map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`flex items-center justify-center w-8 h-8 mx-1 rounded-full
              ${
                currentPage === page
                  ? "bg-red-500 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="mx-1">
            {page}
          </span>
        )
      )}

      {/* Next button */}
      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center w-8 h-8 ml-2 rounded-full
          ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-200"
          }`}
      >
        <span className="sr-only">Next</span>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
