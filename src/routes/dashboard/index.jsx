import { useEffect, useState } from 'react';
import CaseTable from '../../components/dashboard/CaseTable';

export default function DashboardView() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/cases')
      .then((res) => res.json())
      .then((data) => {
        setCases(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-foreground">📋 Case Dashboard</h1>

      {loading ? (
        <p className="text-gray-500">Loading cases...</p>
      ) : (
        <CaseTable data={cases} />
      )}
    </main>
  );
}
