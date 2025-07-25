import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './routes/dashboard/index.jsx';
import CaseRoute from './routes/case/[id]/index.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/case/:id" element={<CaseRoute />} />
      </Routes>
    </BrowserRouter>
  );
}
