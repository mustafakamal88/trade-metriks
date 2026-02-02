import { useNavigate } from 'react-router-dom';
import { AuthLayout, SignUpForm } from '../components';
import { useAuth } from '../../../common/context/useAuth';
import { useEffect } from 'react';

export function SignUpPage() {
  const navigate = useNavigate();
  const { user, loading, signUp } = useAuth();

  // Redirect if already authenticated
  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, loading, navigate]);

  const handleSignUp = async (email: string, password: string, fullName: string) => {
    await signUp(email, password, fullName);
    // After signup, show success message or redirect
    // In a real app, you'd show an email confirmation step
    navigate('/auth/signin', {
      state: { message: 'Sign up successful! Please check your email to confirm.' },
    });
  };

  return (
    <AuthLayout title="Create Account" subtitle="Join TradeMetriks and start tracking your trades">
      <SignUpForm onSubmit={handleSignUp} />
    </AuthLayout>
  );
}
