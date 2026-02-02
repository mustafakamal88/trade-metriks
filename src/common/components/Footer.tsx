import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <h3 className={styles.brandName}>TradeMetriks</h3>
            <p className={styles.brandTagline}>
              Professional trading journal and analytics platform for active traders.
            </p>
          </div>

          {/* Product */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Product</h4>
            <nav className={styles.links}>
              <Link to="/features" className={styles.link}>Features</Link>
              <Link to="/how-it-works" className={styles.link}>How It Works</Link>
              <Link to="/pricing" className={styles.link}>Pricing</Link>
            </nav>
          </div>

          {/* Company */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Company</h4>
            <nav className={styles.links}>
              <Link to="/about" className={styles.link}>About</Link>
              <Link to="/contact" className={styles.link}>Contact</Link>
            </nav>
          </div>

          {/* Legal */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Legal</h4>
            <nav className={styles.links}>
              <Link to="/privacy" className={styles.link}>Privacy Policy</Link>
              <Link to="/terms" className={styles.link}>Terms of Service</Link>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} TradeMetriks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
