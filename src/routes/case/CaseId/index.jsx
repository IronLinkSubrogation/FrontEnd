import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CasePage = () => {
  const { id } = useParams()
  const [caseData, setCaseData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Example fetch: replace with your real endpoint logic
    fetch(`/api/case/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then(data => {
        setCaseData(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [id])

  if (loading) return <div className="p-6 text-gray-500">Loading case...</div>
  if (error || !caseData) return <div className="p-6 text-red-500">Could not load case {id}</div>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Case #{id}</h1>
      <div className="space-y-2">
        <p><strong>Status:</strong> {caseData.status}</p>
        <p><strong>Assigned to:</strong> {caseData.handler}</p>
        <p><strong>Summary:</strong> {caseData.summary}</p>
        {/* Extend here with notes, actions, diary trail */}
      </div>
    </div>
  )
}

export default CasePage
