export default function DiaryTimeline({ entries = [] }) {
  if (!entries.length) return <p className="text-sm text-gray-500">No diary entries available.</p>;

  return (
    <div className="space-y-4 mt-2">
      {entries.map((entry, index) => (
        <div key={index} className="relative pl-6">
          <div className="absolute left-0 top-2 w-3 h-3 rounded-full
            ${entry.status === 'missed' ? 'bg-red-500' :
              entry.status === 'due' ? 'bg-yellow-400' :
              entry.status === 'completed' ? 'bg-green-500' : 'bg-gray-400'}">
          </div>
          <div className="bg-white p-3 rounded shadow">
            <p className="text-sm text-gray-700">
              <strong>{entry.title}</strong> — {entry.date}
            </p>
            <p className="text-xs text-gray-600 whitespace-pre-wrap mt-1">{entry.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
