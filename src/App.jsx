import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CasePage from './routes/case/CaseId/index.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/case/:id" element={<CasePage />} />
      </Routes>
    </BrowserRouter>
  )
}
