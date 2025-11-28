import React from 'react'

const Pagination = ({ page, setPage, limit, total }) => {
  return (
          <div className="flex justify-between mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span>Page {page}</span>

        <button
          disabled={page * limit >= total}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
  );
}


export default Pagination