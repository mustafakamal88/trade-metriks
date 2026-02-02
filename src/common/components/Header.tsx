import { Link } from 'react-router-dom';
import { Button } from './Button';
import styles from './Header.module.css';

export function Header() {
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
          <Link to="/sign-in">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link to="/sign-up">
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
