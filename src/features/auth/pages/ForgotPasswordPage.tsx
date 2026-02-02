import { AuthLayout, ForgotPasswordForm } from '../components';
import { useAuth } from '../../../common/context/useAuth';

export function ForgotPasswordPage() {
  const { resetPassword } = useAuth();

  const handleResetPassword = async (email: string) => {
    await resetPassword(email);
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="We'll send you a link to reset your password"
    >
      <ForgotPasswordForm onSubmit={handleResetPassword} />
    </AuthLayout>
  );
}
