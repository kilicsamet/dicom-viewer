import React from 'react'

const ExpandTable = ({patient}) => {
  return (
    <tr className="text-left border-b-2 border-r-2 border-l-2 border-blue-500 mt-2" >
    <td colSpan="5">
      <div className="flex justify-center">
        <table className="text-left m-2" style={{ width: '90%' }}>
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-2 border-b border-gray-600">Description</th>
              <th className="p-2 border-b border-gray-600">Series</th>
              <th className="p-2 border-b border-gray-600">Modality</th>
              <th className="p-2 border-b border-gray-600">Instance</th>
            </tr>
          </thead>
          <tbody>
            {patient.expand.map((study, index) => (
              <tr key={index}>
                <td className="p-2">{study.description}</td>
                <td className="p-2">{study.series}</td>
                <td className="p-2">{study.modality}</td>
                <td className="p-2">{study.instance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </td>
  </tr>
  )
}

export default ExpandTable
