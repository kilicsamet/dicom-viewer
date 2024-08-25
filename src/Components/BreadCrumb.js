import React from 'react'

const BreadCrumb = ({filteredPatients} ) => {
  return (
    <div className="flex justify-between mb-6 p-4 text-white">
    <div>
      <h1 className="text-3xl font-bold">Study List</h1>
    </div>
    <div>
      <h1 className="font-bold">
        <span className="text-4xl">{filteredPatients.length+ "  "} </span> 
        <span className="text-2xl text-gray-400">  Studies</span>
      </h1>
    </div>
  </div>
  )
}

export default BreadCrumb
