import Card from '../components/Card';
import StatusBadge from '../components/StatusBadge';
import Button from '../components/Button';

const followUps = [
  {
    caseId: 'IRN-10482',
    title: 'Medical Claim Subrogation',
    status: 'due',
    date: '2025-07-25',
    assignee: 'J. Baker',
  },
  {
    caseId: 'IRN-20493',
    title: 'Auto Collision Recovery',
    status: 'missed',
    date: '2025-07-21',
    assignee: 'D. Maxwell',
  },
  {
    caseId: 'IRN-30833',
    title: 'Property Damage Dispute',
    status: 'completed',
    date: '2025-07-15',
    assignee: 'A. Silva',
  },
];

export default function Dashboard() {
  return (
    <div className="bg-neutral min-h-screen px-8 py-6">
      <h1 className="text-3xl font-bold text-foreground mb-6">🧭 Case Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {followUps.map(({ caseId, title, status, date, assignee }) => (
          <Card key={caseId}>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-foreground">{title}</h2>
              <StatusBadge status={status} />
            </div>
            <div className="text-sm text-gray-700 mb-4">
              <p><span className="font-medium">Case ID:</span> {caseId}</p>
              <p><span className="font-medium">Assigned to:</span> {assignee}</p>
              <p><span className="font-medium">Follow-up:</span> {date}</p>
            </div>
            <div className="flex justify-end">
              <Button variant={status === 'missed' ? 'danger' : 'primary'}>
                View Case
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
