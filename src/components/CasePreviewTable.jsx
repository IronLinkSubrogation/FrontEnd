// src/components/dashboard/CasePreviewTable.jsx

export default function CasePreviewTable({ cases, status }) {
  const filtered = status === 'All'
    ? cases
    : cases?.filter((c) => c.status === status);

  return (
    <table className="min-w-full bg-white rounded shadow-md">
      <thead>
        <tr>
          <th className="px-4 py-2">Case ID</th>
          <th className="px-4 py-2">Insured</th>
          <th className="px-4 py-2">Loss Date</th>
          <th className="px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {filtered?.map((c) => (
          <tr key={c.id} className="border-t">
            <td className="px-4 py-2">{c.id}</td>
            <td className="px-4 py-2">{c.insured}</td>
            <td className="px-4 py-2">{c.lossDate}</td>
            <td className="px-4 py-2">{c.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
