import { useEffect, useState } from 'react';
import DiaryTimeline from './DiaryTimeline';

export default function CaseDetailModal({ caseId, onClose }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!caseId) return;
    setLoading(true);

    fetch(`/api/cases/${caseId}/detail`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [caseId]);

  if (!caseId) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-end z-50">
      <div className="w-full max-w-md bg-white h-full shadow-xl p-6 overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4 text-foreground">Case Details</h2>

        {loading ? (
          <p className="text-sm text-gray-500">Loading details...</p>
        ) : !details ? (
          <p className="text-sm text-red-600">Failed to load case data.</p>
        ) : (
          <>
            <div className="mb-4">
              <p><strong className="text-gray-600">Case ID:</strong> {details.id}</p>
              <p><strong className="text-gray-600">Insured:</strong> {details.insured}</p>
              <p><strong className="text-gray-600">Loss Date:</strong> {details.lossDate}</p>
              <p><strong className="text-gray-600">Status:</strong> {details.status}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-foreground">📌 Notes</h3>
              {details.notes?.length ? (
                details.notes.map((note, i) => (
                  <div key={i} className="bg-neutral p-3 rounded mb-2">
                    <p className="text-xs text-gray-500">{note.date}</p>
                    <p className="text-sm text-gray-800 whitespace-pre-wrap">{note.content}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No notes available.</p>
              )}
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-foreground">📅 Diary Timeline</h3>
              <DiaryTimeline entries={details.timeline || []} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
