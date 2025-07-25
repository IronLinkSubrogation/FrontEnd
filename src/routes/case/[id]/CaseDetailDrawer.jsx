import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DiaryTimeline from '../../../components/dashboard/DiaryTimeline';

export default function CaseDetailDrawer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    fetch(`/api/cases/${id}/detail`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleClose = () => navigate('/dashboard');

  if (!id) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50">
      <div className="w-full max-w-md bg-white h-full shadow-xl p-6 overflow-y-auto relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4 text-foreground">Case Details</h2>

        {loading ? (
          <p className="text-sm text-gray-500">Loading...</p>
        ) : !details ? (
          <p className="text-sm text-red-600">No case found.</p>
        ) : (
          <>
            <div className="mb-4 space-y-1">
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
                <p className="text-sm text-gray-500">No notes logged.</p>
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
