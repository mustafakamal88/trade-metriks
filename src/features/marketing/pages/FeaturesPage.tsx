import { Link } from 'react-router-dom';
import { Button } from '../../../common/components';
import styles from './FeaturesPage.module.css';

export function FeaturesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.title}>Built for Professional Traders</h1>
          <p className={styles.subtitle}>
            Every feature designed to help you track, analyze, and improve your trading performance
          </p>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          {/* Feature 1 */}
          <div className={styles.feature}>
            <div className={styles.featureContent}>
              <h2 className={styles.featureTitle}>Comprehensive Trade Journal</h2>
              <p className={styles.featureDescription}>
                Log every detail that matters: entry/exit prices, position size, direction,
                risk/reward ratio, P/L, strategy, session type, and detailed notes.
              </p>
              <ul className={styles.featureList}>
                <li>Full trade lifecycle tracking</li>
                <li>Custom tags and categories</li>
                <li>Screenshot attachments</li>
                <li>Session and strategy filtering</li>
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className={styles.feature}>
            <div className={styles.featureContent}>
              <h2 className={styles.featureTitle}>Advanced Analytics Dashboard</h2>
              <p className={styles.featureDescription}>
                Get instant insights into your performance with professional-grade metrics
                designed for active traders.
              </p>
              <ul className={styles.featureList}>
                <li>Win rate and expectancy</li>
                <li>R-multiple analysis</li>
                <li>Strategy-specific breakdowns</li>
                <li>Time-based performance trends</li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className={styles.feature}>
            <div className={styles.featureContent}>
              <h2 className={styles.featureTitle}>Visual P/L Calendar</h2>
              <p className={styles.featureDescription}>
                See your trading performance at a glance with color-coded daily P/L tiles
                and trade counts.
              </p>
              <ul className={styles.featureList}>
                <li>Daily performance visualization</li>
                <li>Green/red color coding</li>
                <li>Click through to day journal</li>
                <li>Monthly overview</li>
              </ul>
            </div>
          </div>

          {/* Feature 4 */}
          <div className={styles.feature}>
            <div className={styles.featureContent}>
              <h2 className={styles.featureTitle}>Day Journal & Notes</h2>
              <p className={styles.featureDescription}>
                Document your trading psychology, pre-market prep, and post-session reviews
                to build better habits.
              </p>
              <ul className={styles.featureList}>
                <li>Daily trading notes</li>
                <li>Pre-market analysis</li>
                <li>Post-session reviews</li>
                <li>Screenshot support</li>
              </ul>
            </div>
          </div>

          {/* Feature 5 */}
          <div className={styles.feature}>
            <div className={styles.featureContent}>
              <h2 className={styles.featureTitle}>Research Hub</h2>
              <p className={styles.featureDescription}>
                Store trade ideas, market research, and analysis in one organized workspace
                with full-text search.
              </p>
              <ul className={styles.featureList}>
                <li>Searchable research library</li>
                <li>Tag-based organization</li>
                <li>Rich text formatting</li>
                <li>Cross-reference trades</li>
              </ul>
            </div>
          </div>

          {/* Feature 6 */}
          <div className={styles.feature}>
            <div className={styles.featureContent}>
              <h2 className={styles.featureTitle}>Cloud Sync & Security</h2>
              <p className={styles.featureDescription}>
                Your data is encrypted, backed up, and accessible from any device.
                Trade with confidence knowing your journal is secure.
              </p>
              <ul className={styles.featureList}>
                <li>Real-time cloud sync</li>
                <li>End-to-end encryption</li>
                <li>Automatic backups</li>
                <li>Multi-device access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Start Tracking Your Performance Today</h2>
          <Link to="/sign-up">
            <Button variant="primary" size="lg">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
