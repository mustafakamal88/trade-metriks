import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../common/context/useAuth';
import { LoadingSpinner } from '../../../common/components';

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { user, loading } = useAuth();

  // Show loading state while checking authentication
  if (loading) {
    return <LoadingSpinner />;
  }

  // Redirect to sign in if not authenticated
  if (!user) {
    return <Navigate to="/auth/signin" replace />;
  }

  // Redirect to sign in if not authenticated
  if (!user) {
    return <Navigate to="/auth/signin" replace />;
  }

  return <>{children}</>;
}
