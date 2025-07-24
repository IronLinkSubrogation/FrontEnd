// src/components/dashboard/SummaryCard.jsx

export default function SummaryCard({ title, value }) {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-sm font-medium text-gray-500">{title}</h2>
      <p className="text-2xl font-semibold text-gray-800">{value}</p>
    </div>
  );
}
