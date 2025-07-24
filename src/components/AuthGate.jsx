// src/components/auth/AuthGate.jsx

import { useAuth } from '../../hooks/useAuth'; // or your auth context

export default function AuthGate({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Authenticating...</div>;
  if (!user) return <div>Access Denied</div>;

  return <>{children}</>;
}
