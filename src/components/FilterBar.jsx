export default function FilterBar({ status, assignee, onStatusChange, onAssigneeChange }) {
  return (
    <div className="flex flex-wrap items-center justify-between mb-6 bg-white shadow px-4 py-3 rounded border border-gray-200">
      <div className="flex space-x-4">
        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="px-3 py-2 rounded bg-neutral text-foreground text-sm"
        >
          <option value="">All Statuses</option>
          <option value="due">Due</option>
          <option value="missed">Missed</option>
          <option value="completed">Completed</option>
        </select>

        <input
          type="text"
          placeholder="Filter by Assignee"
          value={assignee}
          onChange={(e) => onAssigneeChange(e.target.value)}
          className="px-3 py-2 rounded bg-neutral text-foreground text-sm"
        />
      </div>
    </div>
  );
}
