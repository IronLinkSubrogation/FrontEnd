// src/components/dashboard/StatusFilter.jsx

const statuses = ['All', 'Open', 'Closed', 'Follow-Up'];

export default function StatusFilter({ current, onFilter }) {
  return (
    <div className="flex gap-4">
      {statuses.map((status) => (
        <button
          key={status}
          onClick={() => onFilter(status)}
          className={`px-3 py-1 rounded ${
            current === status
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          {status}
        </button>
      ))}
    </div>
  );
}
