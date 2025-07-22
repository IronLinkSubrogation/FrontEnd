import React, { useEffect, useState } from 'react';
import { getDashboardSummary } from '../api';
import ButtonTile from './ButtonTile';

const Dashboard = () => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    getDashboardSummary().then(data => setSummary(data.summary));
  }, []);

  if (!summary) return <p>Loading dashboard...</p>;

  return (
    <div style={{ padding: '30px' }}>
      <h1>IronLink Admin Dashboard</h1>

      <section>
        <h3>🗓️ Upcoming Follow-Ups</h3>
        <p>{summary.upcomingFollowups.count} cases due {summary.upcomingFollowups.range}</p>
        <ButtonTile
          label={summary.upcomingFollowups.action.label}
          onClick={() => window.open(summary.upcomingFollowups.action.target, '_blank')}
        />
      </section>

      <section>
        <h3>📅 Diary Tasks Today</h3>
        <p>{summary.diaryToday.count} follow-ups for {summary.diaryToday.date}</p>
        <ButtonTile
          label={summary.diaryToday.action.label}
          onClick={() => window.open(summary.diaryToday.action.target, '_blank')}
        />
      </section>

      <section>
        <h3>📊 Status Breakdown</h3>
        <ul>
          {Object.entries(summary.statusBreakdown).map(([status, count]) => (
            <li key={status}>{status}: {count}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>📁 Session Logs</h3>
        <p>{summary.sessionLogs.recent} active sessions in last 24h</p>
        <ButtonTile
          label={summary.sessionLogs.action.label}
          onClick={() => window.open(summary.sessionLogs.action.target, '_blank')}
        />
      </section>
    </div>
  );
};

export default Dashboard;
