import React from 'react'
import { useNavigate } from 'react-router-dom';
import ExpandTable from './ExpandTable';

const TableContainer = ({ filteredPatients, selectedId, toggleExpand, expandedId }) => {
    const navigate = useNavigate(); 
  return (
    <table className="w-full text-left">
    <thead>
      <tr className="bg-gray-700">
        <th className="p-2">Patient Name</th>
        <th className="p-2">Patient ID</th>
        <th className="p-2">Modality</th>
        <th className="p-2">Study Date</th>
        <th className="p-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {
      filteredPatients?.map((patient) => (
        <React.Fragment key={patient.id}>
          <tr className={`bg-gray-800 hover:bg-gray-700 ${selectedId === patient.id ? 'border-t-2 border-r-2 border-l-2 border-blue-500' : ''
            }`}
            onClick={() => toggleExpand(patient.id)}>
            <td className="p-2">{patient.patientName}</td>
            <td className="p-2">{patient.patientID}</td>
            <td className="p-2">{patient.examinationType}</td>
            <td className="p-2">{patient.examinationDate}</td>
            <td className="p-2">
              <button onClick={()=> navigate(`/patient/${patient.id}`)} className="bg-blue-500 px-4 py-2 rounded text-white">
                View
              </button>
            </td>
          </tr>
          {expandedId === patient.id && (
            <ExpandTable patient={patient}/>
          )}

        </React.Fragment>
      ))}
    </tbody>
  </table>
  )
}

export default TableContainer
