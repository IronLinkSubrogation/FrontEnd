import { useNavigate } from 'react-router-dom';

export default function CaseTable({ data }) {
  const navigate = useNavigate();

  return (
    <table className="w-full text-sm border border-gray-200 rounded overflow-hidden">
      <thead className="bg-muted text-left">
        <tr>
          <th className="p-2">ID</th>
          <th className="p-2">Insured</th>
          <th className="p-2">Loss Date</th>
          <th className="p-2">Status</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data?.length ? (
          data.map((caseItem) => (
            <tr key={caseItem.id} className="border-t border-gray-100 hover:bg-accent transition">
              <td className="p-2">{caseItem.id}</td>
              <td className="p-2">{caseItem.insured}</td>
              <td className="p-2">{caseItem.lossDate}</td>
              <td className="p-2">{caseItem.status}</td>
              <td className="p-2">
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => navigate(`/case/${caseItem.id}`)}
                >
                  View
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="p-4 text-gray-500 text-center">No cases found.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
