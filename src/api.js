const API_BASE = process.env.REACT_APP_API_BASE || 'https://ironlink-backend.onrender.com';

export const getDashboardSummary = async () => {
  try {
    const res = await fetch(`${API_BASE}/summary/dashboard`, {
      headers: { 'x-user-role': 'admin' }
    });
    return await res.json();
  } catch (err) {
    console.error('Dashboard summary fetch failed:', err);
    return null;
  }
};

export const getCaseActions = async (caseId) => {
  try {
    const res = await fetch(`${API_BASE}/ui/case-actions/${caseId}`, {
      headers: { 'x-user-role': 'admin' }
    });
    return await res.json();
  } catch (err) {
    console.error(`Case actions fetch failed for ID ${caseId}:`, err);
    return null;
  }
};
