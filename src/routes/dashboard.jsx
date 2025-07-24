import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchDashboardData } from '../api/dashboard'; // assumes custom backend integration
import SummaryCard from '../components/dashboard/SummaryCard';
import CasePreviewTable from '../components/dashboard/CasePreviewTable';
import StatusFilter from '../components/dashboard/StatusFilter';
import LoadingSpinner from '../components/common/LoadingSpinner';
import AuthGate from '../components/auth/AuthGate';

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [filteredStatus, setFilteredStatus] = useState('All');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const response = await fetchDashboardData();
        setData(response);
      } catch (error) {
        console.error('Dashboard fetch error:', error);
        navigate('/error');
      } finally {
        setLoading(false);
      }
    };
    loadDashboard();
  }, []);

  const handleStatusFilter = (status) => {
    setFilteredStatus(status);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <AuthGate>
      <div className="min-h-screen px-6 py-4 bg-gray-50">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

        <StatusFilter current={filteredStatus} onFilter={handleStatusFilter} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {data?.summary?.map((card, i) => (
            <SummaryCard key={i} title={card.title} value={card.value} />
          ))}
        </div>

        <div className="mt-8">
          <CasePreviewTable cases={data?.cases} status={filteredStatus} />
        </div>
      </div>
    </AuthGate>
  );
}
