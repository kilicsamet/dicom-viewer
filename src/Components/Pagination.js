import React from 'react';

function Pagination({ pages, page, handleClickPage }) {
  const handlePageClick = async (num) => {
    await handleClickPage(num);
  };
    if (pages?.length > 1) {
        return (
              <div className="flex justify-end mt-4">
      {pages.map(num => (
        <button
          type="button"
          className={`px-4 py-2 mx-1 border-none ${
            page === num
              ? 'bg-blue-600 text-white'
              : 'bg-blue-100 text-black'
          } cursor-pointer`}
          key={num}
          onClick={() => handlePageClick(num)}
        >
          {num}
        </button>
      ))}
    </div>
        );
    } else {
        return null;
    }
}

export default Pagination;
