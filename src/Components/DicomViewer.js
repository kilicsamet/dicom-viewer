import React from 'react'

const DicomViewer = ({element}) => {
  return (
    <div class="lg:col-span-9">
        <div ref={element} className='border-2 border-blue-500' style={{ width: '100%', height: '100vh', position: 'relative' }}>
        </div>

      </div>
  )
}

export default DicomViewer
