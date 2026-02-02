import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../common/components';
import styles from './SignInForm.module.css';

interface SignInFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
  isLoading?: boolean;
}

export function SignInForm({ onSubmit, isLoading = false }: SignInFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // Validation
      if (!email.trim()) {
        setError('Email is required');
        setIsSubmitting(false);
        return;
      }

      if (!password) {
        setError('Password is required');
        setIsSubmitting(false);
        return;
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError('Please enter a valid email address');
        setIsSubmitting(false);
        return;
      }

      await onSubmit(email, password);

      // Save remember me preference
      if (rememberMe) {
        localStorage.setItem('trademetriks_remember_email', email);
      } else {
        localStorage.removeItem('trademetriks_remember_email');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to sign in. Please try again.';
      setError(errorMessage);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
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

      {/* Password Field */}
      <div className={styles.formGroup}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <div className={styles.passwordWrapper}>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className={styles.input}
            disabled={isLoading || isSubmitting}
            autoComplete="current-password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={styles.togglePassword}
            disabled={isLoading || isSubmitting}
            title={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>
      </div>

      {/* Remember Me */}
      <div className={styles.checkboxGroup}>
        <input
          id="rememberMe"
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className={styles.checkbox}
          disabled={isLoading || isSubmitting}
        />
        <label htmlFor="rememberMe" className={styles.checkboxLabel}>
          Remember me
        </label>
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
        {isSubmitting ? 'Signing In...' : 'Sign In'}
      </Button>

      {/* Divider */}
      <div className={styles.divider}>
        <span>or</span>
      </div>

      {/* Social Auth (Disabled for MVP) */}
      <button
        type="button"
        className={styles.socialButton}
        disabled
        title="Coming Soon"
      >
        <span>🔐</span> Continue with Google (Coming Soon)
      </button>

      {/* Footer Links */}
      <div className={styles.footer}>
        <p className={styles.footerText}>
          Don't have an account?{' '}
          <Link to="/auth/signup" className={styles.link}>
            Sign up
          </Link>
        </p>
        <p className={styles.footerText}>
          <Link to="/auth/forgot-password" className={styles.link}>
            Forgot your password?
          </Link>
        </p>
      </div>
    </form>
  );
}
