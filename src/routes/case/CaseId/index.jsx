import React from 'react'
import { useParams } from 'react-router-dom'

const CasePage = () => {
  const { id } = useParams()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Case Details</h1>
      <p className="text-lg">Viewing details for case ID: <span className="font-mono bg-gray-200 px-2 py-1 rounded">{id}</span></p>

      {/* Add more case-specific content, fetch logic, or component imports below */}
      {/* Example: <CaseSummary id={id} /> */}
    </div>
  )
}

export default CasePage
