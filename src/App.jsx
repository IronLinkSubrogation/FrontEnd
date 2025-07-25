import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CasePage from './routes/case/CaseId/index.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/case/:id" element={<CasePage />} />
        {/* Add additional routes below */}
        {/* Example: <Route path="/" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
