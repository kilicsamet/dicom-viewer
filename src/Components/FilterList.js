import React from 'react'

const FilterList = ({formValues, handleChange, handleFilter, handleClearFilter}) => {
  return (
    <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col w-48">
          <label htmlFor="patientName" className="text-gray-400 text-sm mb-1">Patient Name</label>
          <input
            id="patientName"
            type="text"
            value={formValues.patientName}
            onChange={handleChange}
            className="bg-gray-800 p-2 rounded text-sm"
          />
        </div>
        <div className="flex flex-col w-48">
          <label htmlFor="mrn" className="text-gray-400 text-sm mb-1">MRN</label>
          <input
            id="mrn"
            type="text"
            value={formValues.mrn}
            onChange={handleChange}
            className="bg-gray-800 p-2 rounded text-sm"
          />
        </div>
        <div className="flex flex-col w-48">
          <label htmlFor="studyDate" className="text-gray-400 text-sm mb-1">Study Date</label>
          <input
            id="studyDate"
            type="date"
            value={formValues.studyDate}
            onChange={handleChange}
            className="bg-gray-800 p-2 rounded text-sm"
          />
        </div>
        <div className="flex flex-col w-48">
          <label htmlFor="modality" className="text-gray-400 text-sm mb-1">Modality</label>
          <select
            id="modality"
            value={formValues.modality}
            onChange={handleChange}
            className="bg-gray-800 p-2 rounded text-sm"
          >
            <option value="">Select Modality</option>
            <option value="CT">CT</option>
            <option value="X-ray">X-ray</option>
          </select>
        </div>
        <div className="flex flex-col w-48">
          <button
          onClick={handleFilter}
          className="bg-green-800 hover:bg-green-700 py-2 mt-6 rounded text-white"
        >
          Filter
        </button>
        </div>
        <div className="flex flex-col w-48">
          <button
          onClick={handleClearFilter}
          className="bg-red-800 hover:bg-red-700 py-2 mt-6 rounded text-white"
        >
          Clear
        </button>
        </div>
     
      </div>
  )
}

export default FilterList
