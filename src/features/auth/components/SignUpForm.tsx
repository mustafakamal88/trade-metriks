import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../common/components';
import styles from './SignUpForm.module.css';

interface SignUpFormProps {
  onSubmit: (email: string, password: string, fullName: string) => Promise<void>;
  isLoading?: boolean;
}

function getPasswordStrength(password: string): { strength: number; label: string; color: string } {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
  const colors = ['', '#ef4444', '#f59e0b', '#eab308', '#10b981'];

  return {
    strength: Math.min(strength, 4),
    label: labels[Math.min(strength, 4)] || '',
    color: colors[Math.min(strength, 4)] || '',
  };
}

export function SignUpForm({ onSubmit, isLoading = false }: SignUpFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const passwordStrength = getPasswordStrength(password);

  const validatePassword = (pwd: string): string[] => {
    const errors: string[] = [];
    if (pwd.length < 8) errors.push('At least 8 characters');
    if (!/[A-Z]/.test(pwd)) errors.push('One uppercase letter');
    if (!/[0-9]/.test(pwd)) errors.push('One number');
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // Validation
      if (!fullName.trim()) {
        setError('Full name is required');
        setIsSubmitting(false);
        return;
      }

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

      if (!password) {
        setError('Password is required');
        setIsSubmitting(false);
        return;
      }

      const passwordErrors = validatePassword(password);
      if (passwordErrors.length > 0) {
        setError(`Password must have: ${passwordErrors.join(', ')}`);
        setIsSubmitting(false);
        return;
      }

      if (password !== confirmPassword) {
        setError('Passwords do not match');
        setIsSubmitting(false);
        return;
      }

      await onSubmit(email, password, fullName);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to sign up. Please try again.';
      setError(errorMessage);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* Full Name Field */}
      <div className={styles.formGroup}>
        <label htmlFor="fullName" className={styles.label}>
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="John Doe"
          className={styles.input}
          disabled={isLoading || isSubmitting}
          autoComplete="name"
        />
      </div>

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
            autoComplete="new-password"
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

        {/* Password Strength Indicator */}
        {password && (
          <div className={styles.strengthContainer}>
            <div className={styles.strengthBar}>
              <div
                className={styles.strengthFill}
                style={{
                  width: `${(passwordStrength.strength / 4) * 100}%`,
                  backgroundColor: passwordStrength.color,
                }}
              />
            </div>
            <span className={styles.strengthLabel} style={{ color: passwordStrength.color }}>
              {passwordStrength.label}
            </span>
          </div>
        )}

        {/* Password Requirements */}
        {password && validatePassword(password).length > 0 && (
          <div className={styles.requirements}>
            <p className={styles.requirementsTitle}>Password must have:</p>
            <ul className={styles.requirementsList}>
              <li style={{ color: password.length >= 8 ? '#10b981' : '#ef4444' }}>
                {password.length >= 8 ? '✓' : '○'} At least 8 characters
              </li>
              <li style={{ color: /[A-Z]/.test(password) ? '#10b981' : '#ef4444' }}>
                {/[A-Z]/.test(password) ? '✓' : '○'} One uppercase letter
              </li>
              <li style={{ color: /[0-9]/.test(password) ? '#10b981' : '#ef4444' }}>
                {/[0-9]/.test(password) ? '✓' : '○'} One number
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Confirm Password Field */}
      <div className={styles.formGroup}>
        <label htmlFor="confirmPassword" className={styles.label}>
          Confirm Password
        </label>
        <div className={styles.passwordWrapper}>
          <input
            id="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            className={styles.input}
            disabled={isLoading || isSubmitting}
            autoComplete="new-password"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className={styles.togglePassword}
            disabled={isLoading || isSubmitting}
            title={showConfirmPassword ? 'Hide password' : 'Show password'}
          >
            {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>
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
        {isSubmitting ? 'Creating Account...' : 'Create Account'}
      </Button>

      {/* Footer Links */}
      <div className={styles.footer}>
        <p className={styles.footerText}>
          Already have an account?{' '}
          <Link to="/auth/signin" className={styles.link}>
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
}
