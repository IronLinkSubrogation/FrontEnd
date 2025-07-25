import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CasePage = () => {
  const { id } = useParams()
  const [caseData, setCaseData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!id) return

    fetch(`/api/case/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch case')
        return res.json()
      })
      .then((data) => {
        setCaseData(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div className="p-6 text-sm text-muted">Loading case #{id}...</div>
    )
  }

  if (error || !caseData) {
    return (
      <div className="p-6 text-sm text-red-600">Unable to load case #{id}</div>
    )
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-foreground">🧾 Case #{id}</h1>

      <div className="space-y-2">
        <p><strong>Status:</strong> {caseData.status}</p>
        <p><strong>Insured:</strong> {caseData.insured}</p>
        <p><strong>Loss Date:</strong> {caseData.lossDate}</p>
        <p><strong>Assigned To:</strong> {caseData.handler || 'Unassigned'}</p>
        <p><strong>Summary:</strong> {caseData.summary || '—'}</p>
      </div>
    </div>
  )
}

export default CasePage
