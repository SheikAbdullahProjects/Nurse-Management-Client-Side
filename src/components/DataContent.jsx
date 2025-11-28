import React from 'react'

const DataContent = ({ data, search, formatDate, handleRemove, handleSort, sortBy, sortOrder }) => {
  return (
    <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3 border" onClick={() => handleSort("id")}>Id {sortBy === "id" ? (sortOrder === "ASC" ? "▲" : "▼") : ""} </th>
                <th className="p-3 border" onClick={() => handleSort("name")}>Name {sortBy === "name" ? (sortOrder === "ASC" ? "▲" : "▼") : ""} </th>
                <th className="p-3 border" onClick={() => handleSort("license_number")}>License Number {sortBy === "license_number" ? (sortOrder === "ASC" ? "▲" : "▼") : ""} </th>
                <th className="p-3 border" onClick={() => handleSort("dob")}>Date of Birth {sortBy === "dob" ? (sortOrder === "ASC" ? "▲" : "▼") : ""} </th>
                <th className="p-3 border" onClick={() => handleSort("age")}>Age {sortBy === "age" ? (sortOrder === "ASC" ? "▲" : "▼") : ""} </th>
                <th className="p-3 border text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter(
                  (item) =>
                    item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.license_number
                      .toLowerCase()
                      .includes(search.toLowerCase())
                )
                .map((nurse) => (
                  <tr key={nurse.id} className="hover:bg-gray-50">
                    <td className="p-3 border">{nurse.id}</td>
                    <td className="p-3 border">{nurse.name}</td>
                    <td className="p-3 border">{nurse.license_number}</td>
                    <td className="p-3 border">{formatDate(nurse.dob)}</td>
                    <td className="p-3 border">{nurse.age}</td>
                    <td className="p-3 border text-center">
                      <button
                        className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        onClick={() => handleRemove(nurse.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
  )
}

export default DataContent