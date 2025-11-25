import React from 'react'

const SearchBar = ({ search, setSearch }) => {
  return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Search Here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex gap-3">
            <button
              onClick={() =>
                (window.location.href = "http://localhost:3000/api/nurses/csv")
              }
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Download CSV
            </button>

            <button
              onClick={() =>
                (window.location.href =
                  "http://localhost:3000/api/nurses/excel")
              }
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Download Excel
            </button>
          </div>
        </div>
  )
}

export default SearchBar