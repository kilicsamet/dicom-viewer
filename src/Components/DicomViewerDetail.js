import React from 'react'

const DicomViewerDetail = ({toolActive, handleToggleTool, patientDetail, selections, handleDeleteSelection}) => {
  return (
    <div class="lg:col-span-3">
    <button
      className={`px-4 py-2 m-2 rounded text-white ${!toolActive ? 'bg-green-800' : 'bg-red-800'
        }`}
      onClick={handleToggleTool}
    >
      {toolActive ? 'Seçim yapmayı bırak' : 'Seçim yapmak için tıkla'}
    </button>

    <div className="flex justify-start items-center">
      <span className="text-sm">
        {patientDetail?.examinationDate}
      </span>
      <button className="bg-gray-200 px-4 py-2 m-2 rounded text-black">
        {patientDetail?.examinationType}
      </button>
    </div>
    <div>
<span className="text-2xl font-bold">
{patientDetail?.patientName}
</span>
</div>
    <div style={{ marginTop: '20px', padding: '10px', width: '100%', float: 'left' }}>
      <div className="bg-blue-500 px-4 py-2 m-2 rounded text-white flex justify-between items-center">
        <h3 className="text-lg">MEASUREMENTS</h3>
        <span className="text-lg">{selections.length}</span>
      </div>
      <ul>
        {
          selections.length === 0 ? (
            <li className="text-sm">Seçim yapılmadı</li>
          ) : (
            <ul>
              {selections.map((selection, index) => (
                <li key={index} className="mb-4">
                  <div className="text-sm">Unit: {selection.unit}</div>
                  <div className="text-sm">Area: {selection.area}</div>
                  <div className="text-sm">Mean: {selection.mean}</div>
                  <div className="text-sm">Max: {selection.max}</div>
                  <div className="text-sm">Std Dev: {selection.stdDev}</div>

                  <div className="flex justify-end mt-2">
                    <button
                      onClick={() => handleDeleteSelection(index, selection.uuid)}
                      className="px-4 py-2 text-white bg-red-500 rounded"
                    >
                      Delete
                    </button>
                  </div>

                  <div className="h-1 bg-blue-500 mt-2"></div> {/* Mavi çizgi */}
                </li>
              ))}
            </ul>
          )
        }

        {selections.length > 0 && (
          <button
            onClick={() => window.print()}
            className="mt-2 ml-2 px-4 py-2 text-white bg-blue-500 rounded block mx-auto"
          >
            Yazdır
          </button>
        )}



      </ul>
    </div>
  </div>
  )
}

export default DicomViewerDetail
