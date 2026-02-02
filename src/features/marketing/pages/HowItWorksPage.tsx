import { Link } from 'react-router-dom';
import { Button } from '../../../common/components';
import styles from './HowItWorksPage.module.css';

export function HowItWorksPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.title}>How TradeMetriks Works</h1>
          <p className={styles.subtitle}>
            From trade logging to performance insights in three simple steps
          </p>
        </div>
      </section>

      <section className={styles.steps}>
        <div className={styles.container}>
          {/* Step 1 */}
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h2 className={styles.stepTitle}>Log Your Trades</h2>
              <p className={styles.stepDescription}>
                After each trading session, quickly log your trades with all the details
                that matter: entry/exit prices, position size, direction, risk/reward,
                P/L, strategy, and session notes. Upload chart screenshots to visualize
                your setups.
              </p>
              <ul className={styles.stepList}>
                <li>Quick entry form (less than 60 seconds per trade)</li>
                <li>Custom tags for strategies and setups</li>
                <li>Screenshot attachment support</li>
                <li>Daily journal for session notes</li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h2 className={styles.stepTitle}>Review Your Performance</h2>
              <p className={styles.stepDescription}>
                TradeMetriks automatically calculates your key performance metrics and
                displays them in an easy-to-understand dashboard. See your win rate,
                expectancy, best strategies, and performance trends at a glance.
              </p>
              <ul className={styles.stepList}>
                <li>Win rate and expectancy tracking</li>
                <li>Strategy-specific breakdowns</li>
                <li>Visual P/L calendar</li>
                <li>Time-based performance analysis</li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h2 className={styles.stepTitle}>Improve Your Edge</h2>
              <p className={styles.stepDescription}>
                Use the insights from your data to identify what's working, eliminate
                what's not, and refine your trading process. Review past trades with
                screenshots, analyze patterns, and build a research library for future
                reference.
              </p>
              <ul className={styles.stepList}>
                <li>Identify high-probability setups</li>
                <li>Eliminate losing patterns</li>
                <li>Build searchable research notes</li>
                <li>Track improvement over time</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.workflow}>
        <div className={styles.workflowContainer}>
          <h2 className={styles.workflowTitle}>Your Daily Trading Workflow</h2>
          <div className={styles.workflowSteps}>
            <div className={styles.workflowStep}>
              <div className={styles.workflowIcon}>📝</div>
              <h3 className={styles.workflowStepTitle}>Pre-Market</h3>
              <p className={styles.workflowStepDesc}>
                Review yesterday's trades and write your trading plan for the day
              </p>
            </div>
            <div className={styles.workflowArrow}>→</div>
            <div className={styles.workflowStep}>
              <div className={styles.workflowIcon}>📊</div>
              <h3 className={styles.workflowStepTitle}>During Market</h3>
              <p className={styles.workflowStepDesc}>
                Focus on execution. Take screenshots of your setups.
              </p>
            </div>
            <div className={styles.workflowArrow}>→</div>
            <div className={styles.workflowStep}>
              <div className={styles.workflowIcon}>📈</div>
              <h3 className={styles.workflowStepTitle}>Post-Market</h3>
              <p className={styles.workflowStepDesc}>
                Log trades, upload screenshots, and write your session review
              </p>
            </div>
            <div className={styles.workflowArrow}>→</div>
            <div className={styles.workflowStep}>
              <div className={styles.workflowIcon}>🔍</div>
              <h3 className={styles.workflowStepTitle}>Weekly Review</h3>
              <p className={styles.workflowStepDesc}>
                Analyze performance metrics and adjust your strategy
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaSubtitle}>
            Start logging your trades and improving your performance today
          </p>
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
