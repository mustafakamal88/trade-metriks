import { Link } from 'react-router-dom';
import { Button } from '../../../common/components';
import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Master Your Trading
              <span className={styles.heroGradient}> With Data</span>
            </h1>
            <p className={styles.heroSubtitle}>
              TradeMetriks is the professional trading journal and analytics platform
              built for serious traders who want to improve their edge through data-driven insights.
            </p>
            <div className={styles.heroActions}>
              <Link to="/sign-up">
                <Button variant="primary" size="lg">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg">
                  See How It Works
                </Button>
              </Link>
            </div>
            <p className={styles.heroNote}>
              No credit card required • 14-day free trial
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>98%</div>
            <div className={styles.statLabel}>Trade Accuracy</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>10k+</div>
            <div className={styles.statLabel}>Active Traders</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>500k+</div>
            <div className={styles.statLabel}>Trades Logged</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>24/7</div>
            <div className={styles.statLabel}>Data Access</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.features}>
        <div className={styles.featuresContainer}>
          <div className={styles.featuresHeader}>
            <h2 className={styles.featuresTitle}>Everything You Need to Trade Better</h2>
            <p className={styles.featuresSubtitle}>
              Professional-grade tools designed specifically for active traders
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3 className={styles.featureTitle}>Advanced Analytics</h3>
              <p className={styles.featureDescription}>
                Deep performance metrics including win rate, expectancy, R-multiples,
                and strategy-specific breakdowns.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📝</div>
              <h3 className={styles.featureTitle}>Trade Journal</h3>
              <p className={styles.featureDescription}>
                Log every trade with full detail: entry/exit, position size, strategy,
                session notes, and screenshots.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📅</div>
              <h3 className={styles.featureTitle}>P/L Calendar</h3>
              <p className={styles.featureDescription}>
                Visualize your daily performance at a glance with color-coded P/L tiles
                and trade counts.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔍</div>
              <h3 className={styles.featureTitle}>Research Hub</h3>
              <p className={styles.featureDescription}>
                Store trade ideas, market research, and post-trade reviews in one
                organized workspace.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📸</div>
              <h3 className={styles.featureTitle}>Chart Screenshots</h3>
              <p className={styles.featureDescription}>
                Upload and attach chart screenshots to every trade for visual trade review
                and pattern recognition.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3 className={styles.featureTitle}>Real-Time Sync</h3>
              <p className={styles.featureDescription}>
                Access your data instantly across all devices with secure cloud sync
                and offline support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className={styles.value}>
        <div className={styles.valueContainer}>
          <div className={styles.valueContent}>
            <h2 className={styles.valueTitle}>
              Turn Your Trading Data Into Your Competitive Edge
            </h2>
            <p className={styles.valueText}>
              Most traders fail because they don't track their performance.
              TradeMetriks gives you the insights you need to identify what's working,
              eliminate what's not, and compound your edge over time.
            </p>
            <ul className={styles.valueList}>
              <li className={styles.valueListItem}>
                <span className={styles.valueCheck}>✓</span>
                Track every trade with military precision
              </li>
              <li className={styles.valueListItem}>
                <span className={styles.valueCheck}>✓</span>
                Analyze performance by strategy, session, and timeframe
              </li>
              <li className={styles.valueListItem}>
                <span className={styles.valueCheck}>✓</span>
                Identify your most profitable setups
              </li>
              <li className={styles.valueListItem}>
                <span className={styles.valueCheck}>✓</span>
                Review trades with annotated screenshots
              </li>
              <li className={styles.valueListItem}>
                <span className={styles.valueCheck}>✓</span>
                Build a searchable research library
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Take Your Trading Seriously?</h2>
          <p className={styles.ctaSubtitle}>
            Join thousands of traders who use TradeMetriks to improve their performance.
          </p>
          <Link to="/sign-up">
            <Button variant="primary" size="lg">
              Start Your Free Trial
            </Button>
          </Link>
          <p className={styles.ctaNote}>
            14-day free trial • No credit card required
          </p>
        </div>
      </section>
    </div>
  );
}
