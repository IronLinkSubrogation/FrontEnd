import db from '../db/index.js'; // assumes direct SQL or ORM integration

export const getDashboardData = async (req, res) => {
  try {
    const summary = await db.getSummaryMetrics(); // custom query
    const cases = await db.getCasePreviewList();  // status/date filtered list

    res.status(200).json({ summary, cases });
  } catch (error) {
    console.error('Dashboard fetch error:', error);
    res.status(500).json({ error: 'Dashboard fetch failed' });
  }
};
