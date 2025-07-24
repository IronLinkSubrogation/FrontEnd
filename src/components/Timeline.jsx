export default function Timeline({ items = [] }) {
  return (
    <div className="space-y-6">
      {items.map(({ date, label, status }, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className={`w-3 h-3 rounded-full mt-1
            ${status === 'missed' ? 'bg-danger' :
              status === 'due' ? 'bg-accent' :
              status === 'completed' ? 'bg-success' :
              'bg-neutral'}
          `}></div>
          <div>
            <p className="text-sm font-medium text-foreground">{label}</p>
            <p className="text-xs text-gray-600">{date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
