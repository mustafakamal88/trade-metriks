import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { useAuth } from '../context/useAuth';
import styles from './Header.module.css';

export function Header() {
  const navigate = useNavigate();
  const { user, profile, signOut } = useAuth();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleSignOut = async () => {
    setShowProfileDropdown(false);
    await signOut();
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>TradeMetriks</span>
        </Link>

        <nav className={styles.nav}>
          <Link to="/features" className={styles.navLink}>
            Features
          </Link>
          <Link to="/how-it-works" className={styles.navLink}>
            How It Works
          </Link>
          <Link to="/pricing" className={styles.navLink}>
            Pricing
          </Link>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
          <Link to="/contact" className={styles.navLink}>
            Contact
          </Link>
        </nav>

        <div className={styles.actions}>
          {user ? (
            <div className={styles.profileContainer}>
              <button
                className={styles.profileButton}
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              >
                {profile?.avatar_url ? (
                  <img
                    src={profile.avatar_url}
                    alt={profile.full_name || 'User avatar'}
                    className={styles.profileAvatar}
                  />
                ) : (
                  <div className={styles.profileAvatarPlaceholder}>
                    {profile?.full_name?.charAt(0) || user.email?.charAt(0)}
                  </div>
                )}
                <span className={styles.profileName}>
                  {profile?.full_name || user.email}
                </span>
                <span className={styles.chevron}>▼</span>
              </button>

              {showProfileDropdown && (
                <div className={styles.dropdown}>
                  <Link
                    to="/dashboard"
                    className={styles.dropdownLink}
                    onClick={() => setShowProfileDropdown(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    className={styles.dropdownButton}
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/auth/signin">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth/signup">
                <Button variant="primary" size="sm">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
