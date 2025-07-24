import { useEffect, useState } from 'react';
import SummaryBar from '../components/SummaryBar';
import Card from '../components/Card';
import StatusBadge from '../components/StatusBadge';
import Button from '../components/Button';

export default function Dashboard() {
  const [followUps, setFollowUps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [previewNote, setPreviewNote] = useState(null);

  useEffect(() => {
    fetch('/api/followups')
      .then(res => res.json())
      .then(data => {
        setFollowUps(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const fetchCaseNote = async (caseId) => {
    const res = await fetch(`/api/cases/${caseId}/notes`);
    const data = await res.json();
    setPreviewNote(data[0]); // inject the latest note
  };

  if (loading) return <div className="p-8 text-gray-500">Loading dashboard...</div>;

  return (
    <div className="bg-neutral min-h-screen px-8 py-6">
      <h1 className="text-3xl font-bold text-foreground mb-6">🧭 Case Dashboard</h1>

      <SummaryBar data={followUps} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {followUps.map(({ caseId, title, status, date, assignee }) => (
          <Card key={caseId}>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-foreground">{title}</h2>
              <StatusBadge status={status} />
            </div>
            <div className="text-sm text-gray-700 mb-4">
              <p><span className="font-medium">Case ID:</span> {caseId}</p>
              <p><span className="font-medium">Assigned to:</span> {assignee}</p>
              <p><span className="font-medium">Follow-up:</span> {date}</p>
            </div>
            <div className="flex justify-between items-center">
              <Button variant={status === 'missed' ? 'danger' : 'primary'}>
                View Case
              </Button>
              <button
                onClick={() => fetchCaseNote(caseId)}
                className="text-xs text-blue-600 underline"
              >
                Preview Note
              </button>
            </div>
          </Card>
        ))}
      </div>

      {previewNote && (
        <div className="mt-8 p-4 bg-white shadow rounded border border-gray-200">
          <h2 className="text-lg font-semibold mb-2 text-foreground">📌 Latest Case Note</h2>
          <p className="text-sm text-gray-700 whitespace-pre-wrap">{previewNote.content}</p>
        </div>
      )}
    </div>
  );
}
