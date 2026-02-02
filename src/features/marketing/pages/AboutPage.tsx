import { Link } from 'react-router-dom';
import { Button } from '../../../common/components';
import styles from './AboutPage.module.css';

export function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.title}>Built by Traders, for Traders</h1>
          <p className={styles.subtitle}>
            TradeMetriks was created to solve a simple problem: most trading journals
            are either too simple or too complicated. We built the one we wish existed.
          </p>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.missionText}>
            We believe that consistent tracking and honest self-analysis are the foundations
            of trading success. TradeMetriks gives you the tools to build those habits without
            getting in your way.
          </p>
          <p className={styles.missionText}>
            Every feature is designed with one goal: help you understand your trading performance
            so you can make better decisions and compound your edge over time.
          </p>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What We Believe</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3 className={styles.valueTitle}>Data-Driven</h3>
              <p className={styles.valueDescription}>
                Trading is a numbers game. We help you track the numbers that matter
                and turn them into actionable insights.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3 className={styles.valueTitle}>Simplicity</h3>
              <p className={styles.valueDescription}>
                Great tools should be powerful without being complicated. We obsess over
                making TradeMetriks intuitive and fast.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3 className={styles.valueTitle}>Privacy</h3>
              <p className={styles.valueDescription}>
                Your trading data is yours. We encrypt everything, never sell your data,
                and give you full control.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3 className={styles.valueTitle}>Continuous Improvement</h3>
              <p className={styles.valueDescription}>
                We're traders ourselves. We use TradeMetriks daily and constantly improve
                it based on real feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Start Tracking?</h2>
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
