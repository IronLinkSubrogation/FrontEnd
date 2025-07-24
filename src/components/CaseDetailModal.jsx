import { useEffect, useState } from 'react';

export default function CaseDetailModal({ caseId, onClose }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (!caseId) return;

    fetch(`/api/cases/${caseId}/detail`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [caseId]);

  if (!caseId) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-end z-50">
      <div className="w-full max-w-md bg-white h-full shadow-lg p-6 overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          ✕
        </button>

        <h2 className="text-lg font-bold mb-2 text-foreground">Case Detail: {caseId}</h2>

        {!details ? (
          <p className="text-sm text-gray-600">Loading case details...</p>
        ) : (
          <>
            <p className="text-sm text-gray-800"><strong>Insured:</strong> {details.insured}</p>
            <p className="text-sm text-gray-800"><strong>Loss Date:</strong> {details.lossDate}</p>
            <p className="text-sm text-gray-800"><strong>Status:</strong> {details.status}</p>

            <div className="mt-4">
              <h3 className="font-semibold mb-1 text-foreground">📌 Notes</h3>
              {details.notes?.map((note, i) => (
                <div key={i} className="bg-neutral p-2 mb-2 rounded">
                  <p className="text-xs text-gray-600">{note.date}</p>
                  <p className="text-sm text-gray-800 whitespace-pre-wrap">{note.content}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
