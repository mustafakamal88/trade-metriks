import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../common/components';
import styles from './ForgotPasswordForm.module.css';

interface ForgotPasswordFormProps {
  onSubmit: (email: string) => Promise<void>;
  isLoading?: boolean;
}

export function ForgotPasswordForm({ onSubmit, isLoading = false }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setIsSubmitting(true);

    try {
      if (!email.trim()) {
        setError('Email is required');
        setIsSubmitting(false);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError('Please enter a valid email address');
        setIsSubmitting(false);
        return;
      }

      await onSubmit(email);
      setSuccess(true);
      setEmail('');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send reset email. Please try again.';
      setError(errorMessage);
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className={styles.form}>
        <div className={styles.successMessage}>
          <div className={styles.successIcon}>✓</div>
          <h3 className={styles.successTitle}>Check Your Email</h3>
          <p className={styles.successText}>
            We've sent a password reset link to your email address. Click the link to reset your password.
          </p>
          <p className={styles.successSubtext}>
            Didn't receive it? Check your spam folder or try again.
          </p>
        </div>

        <Button variant="outline" fullWidth size="lg">
          <Link to="/auth/signin" style={{ width: '100%', display: 'block' }}>
            Back to Sign In
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <p className={styles.description}>
        Enter your email address and we'll send you a link to reset your password.
      </p>

      {/* Email Field */}
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={styles.input}
          disabled={isLoading || isSubmitting}
          autoComplete="email"
        />
      </div>

      {/* Error Message */}
      {error && <div className={styles.error}>{error}</div>}

      {/* Submit Button */}
      <Button
        variant="primary"
        size="lg"
        fullWidth
        type="submit"
        disabled={isLoading || isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Reset Link'}
      </Button>

      {/* Footer Links */}
      <div className={styles.footer}>
        <p className={styles.footerText}>
          <Link to="/auth/signin" className={styles.link}>
            Back to Sign In
          </Link>
        </p>
      </div>
    </form>
  );
}
