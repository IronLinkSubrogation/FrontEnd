import { useState } from 'react';

export default function DiaryEntryModal({ caseId, onClose, onSubmit }) {
  const [note, setNote] = useState('');
  const [status, setStatus] = useState('due');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const body = { caseId, note, status };

    try {
      const res = await fetch('/api/diary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setNote('');
        setStatus('due');
        onSubmit(); // optional callback to refresh view
        onClose();
      }
    } catch (err) {
      console.error('Diary submit failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded shadow-xl relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4 text-foreground">New Diary Entry</h2>

        <label className="text-sm text-gray-700 block mb-1">Follow-Up Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-neutral text-foreground"
        >
          <option value="due">Due</option>
          <option value="missed">Missed</option>
          <option value="completed">Completed</option>
        </select>

        <label className="text-sm text-gray-700 block mb-1">Note</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full h-32 p-2 rounded bg-neutral text-foreground mb-4 resize-none"
        ></textarea>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Saving...' : 'Submit Entry'}
        </button>
      </div>
    </div>
  );
}
