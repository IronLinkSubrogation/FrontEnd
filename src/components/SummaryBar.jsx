import StatusBadge from './StatusBadge';

export default function SummaryBar({ data = [] }) {
  const counts = {
    due: data.filter(item => item.status === 'due').length,
    missed: data.filter(item => item.status === 'missed').length,
    completed: data.filter(item => item.status === 'completed').length,
  };

  return (
    <div className="bg-background border-b border-gray-300 py-4 mb-6">
      <h2 className="text-xl font-semibold text-foreground mb-2">📋 Summary</h2>
      <div className="flex space-x-4">
        <div className="flex items-center space-x-2">
          <StatusBadge status="due" />
          <span className="text-sm text-gray-700">{counts.due} Due</span>
        </div>
        <div className="flex items-center space-x-2">
          <StatusBadge status="missed" />
          <span className="text-sm text-gray-700">{counts.missed} Missed</span>
        </div>
        <div className="flex items-center space-x-2">
          <StatusBadge status="completed" />
          <span className="text-sm text-gray-700">{counts.completed} Completed</span>
        </div>
      </div>
    </div>
  );
}
