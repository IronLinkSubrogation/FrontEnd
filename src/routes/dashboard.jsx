import { useEffect, useState } from 'react';
import CaseDetailModal from '../components/dashboard/CaseDetailModal';
import { Button } from '../components/ui';

export default function Dashboard() {
  const [cases, setCases] = useState([]);
  const [selectedCaseId, setSelectedCaseId] = useState(null);

  useEffect(() => {
    fetch('/api/cases')
      .then((res) => res.json())
      .then((data) => setCases(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4 text-foreground">🗂️ Subrogation Case Dashboard</h1>

      {cases.length === 0 ? (
        <p className="text-gray-600 text-sm">No cases available.</p>
      ) : (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 text-xs text-gray-700">Case ID</th>
              <th className="px-4 py-2 text-xs text-gray-700">Insured</th>
              <th className="px-4 py-2 text-xs text-gray-700">Loss Date</th>
              <th className="px-4 py-2 text-xs text-gray-700">Status</th>
              <th className="px-4 py-2 text-xs text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((c) => (
              <tr key={c.id} className="border-b text-sm">
                <td className="px-4 py-2">{c.id}</td>
                <td className="px-4 py-2">{c.insured}</td>
                <td className="px-4 py-2">{c.lossDate}</td>
                <td className="px-4 py-2">{c.status}</td>
                <td className="px-4 py-2">
                  <Button variant="primary" onClick={() => setSelectedCaseId(c.id)}>
                    View Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedCaseId && (
        <CaseDetailModal
          caseId={selectedCaseId}
          onClose={() => setSelectedCaseId(null)}
        />
      )}
    </div>
  );
}
