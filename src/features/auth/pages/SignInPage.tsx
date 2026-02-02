import { useNavigate } from 'react-router-dom';
import { AuthLayout, SignInForm } from '../components';
import { useAuth } from '../../../common/context/useAuth';
import { useEffect } from 'react';

export function SignInPage() {
  const navigate = useNavigate();
  const { user, loading, signIn } = useAuth();

  // Redirect if already authenticated
  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, loading, navigate]);

  const handleSignIn = async (email: string, password: string) => {
    await signIn(email, password);
    // Navigation happens automatically via AuthContext listener
  };

  return (
    <AuthLayout title="Welcome Back" subtitle="Sign in to access your trading journal">
      <SignInForm onSubmit={handleSignIn} />
    </AuthLayout>
  );
}
