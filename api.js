const API_BASE = process.env.REACT_APP_API_BASE || 'https://ironlink-backend.onrender.com';

export const getDashboardSummary = async () => {
  const res = await fetch(`${API_BASE}/summary/dashboard`, {
    headers: { 'x-user-role': 'admin' }
  });
  return res.json();
};

export const getCaseActions = async (caseId) => {
  const res = await fetch(`${API_BASE}/ui/case-actions/${caseId}`, {
    headers: { 'x-user-role': 'admin' }
  });
  return res.json();
};
