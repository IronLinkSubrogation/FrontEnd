import React, { useEffect, useState } from 'react';
import ButtonTile from './ButtonTile';

const Dashboard = () => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE}/summary/dashboard`,
          {
            headers: { 'x-user-role': 'admin' }
          }
        );
        const data = await res.json();
        setSummary(data.summary);
      } catch (error) {
        console.error('Dashboard fetch failed:', error);
      }
    };

    fetchDashboard();
  }, []);

  if (!summary) return <div>Loading dashboard...</div>;

  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>IronLink Admin Dashboard</h1>

      <section style={{ marginBottom: '30px' }}>
        <h3>🗂 Upcoming Follow-Ups</h3>
        <p>
          {summary.upcomingFollowups.count} cases due{' '}
          {summary.upcomingFollowups.range}
        </p>
        <ButtonTile
          label={summary.upcomingFollowups.action.label}
          onClick={() =>
            window.open(summary.upcomingFollowups.action.target, '_blank')
          }
        />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h3>📅 Diary Tasks Today</h3>
        <p>
          {summary.diaryToday.count} follow-ups for{' '}
          {summary.diaryToday.date}
        </p>
        <ButtonTile
          label={summary.diaryToday.action.label}
          onClick={() =>
            window.open(summary.diaryToday.action.target, '_blank')
          }
        />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h3>📁 Session Logs</h3>
        <p>{summary.sessionLogs.recent} active sessions in last 24h</p>
        <ButtonTile
          label={summary.sessionLogs.action.label}
          onClick={() =>
            window.open(summary.sessionLogs.action.target, '_blank')
          }
        />
      </section>

      <section>
        <h3>📊 Status Breakdown</h3>
        <ul>
          {Object.entries(summary.statusBreakdown).map(([status, count]) => (
            <li key={status}>
              {status}: {count}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
