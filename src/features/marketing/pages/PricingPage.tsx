import { Link } from 'react-router-dom';
import { Button } from '../../../common/components';
import styles from './PricingPage.module.css';

export function PricingPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.title}>Simple, Transparent Pricing</h1>
          <p className={styles.subtitle}>
            Choose the plan that fits your trading style. All plans include 14-day free trial.
          </p>
        </div>
      </section>

      <section className={styles.pricing}>
        <div className={styles.container}>
          <div className={styles.pricingGrid}>
            {/* Starter Plan */}
            <div className={styles.pricingCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>Starter</h3>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>$19</span>
                  <span className={styles.period}>/month</span>
                </div>
                <p className={styles.planDescription}>
                  Perfect for casual traders getting started
                </p>
              </div>
              <ul className={styles.featuresList}>
                <li className={styles.feature}>Up to 100 trades/month</li>
                <li className={styles.feature}>Basic analytics</li>
                <li className={styles.feature}>P/L calendar</li>
                <li className={styles.feature}>Trade journal</li>
                <li className={styles.feature}>Cloud sync</li>
              </ul>
              <Link to="/sign-up">
                <Button variant="outline" fullWidth>
                  Start Free Trial
                </Button>
              </Link>
            </div>

            {/* Pro Plan */}
            <div className={`${styles.pricingCard} ${styles.featured}`}>
              <div className={styles.badge}>Most Popular</div>
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>Professional</h3>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>$49</span>
                  <span className={styles.period}>/month</span>
                </div>
                <p className={styles.planDescription}>
                  For active traders who take it seriously
                </p>
              </div>
              <ul className={styles.featuresList}>
                <li className={styles.feature}>Unlimited trades</li>
                <li className={styles.feature}>Advanced analytics</li>
                <li className={styles.feature}>Research hub</li>
                <li className={styles.feature}>Screenshot uploads</li>
                <li className={styles.feature}>Day journal</li>
                <li className={styles.feature}>Priority support</li>
                <li className={styles.feature}>Export data</li>
              </ul>
              <Link to="/sign-up">
                <Button variant="primary" fullWidth>
                  Start Free Trial
                </Button>
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className={styles.pricingCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>Enterprise</h3>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>Custom</span>
                </div>
                <p className={styles.planDescription}>
                  For prop firms and trading teams
                </p>
              </div>
              <ul className={styles.featuresList}>
                <li className={styles.feature}>Everything in Professional</li>
                <li className={styles.feature}>Team management</li>
                <li className={styles.feature}>Custom integrations</li>
                <li className={styles.feature}>Dedicated support</li>
                <li className={styles.feature}>SLA guarantee</li>
                <li className={styles.feature}>Custom branding</li>
              </ul>
              <Link to="/contact">
                <Button variant="outline" fullWidth>
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.faqContainer}>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Can I cancel anytime?</h3>
              <p className={styles.faqAnswer}>
                Yes, you can cancel your subscription at any time. No questions asked.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Do you offer refunds?</h3>
              <p className={styles.faqAnswer}>
                We offer a 14-day free trial. If you're not satisfied after that, we offer
                a 30-day money-back guarantee.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>What payment methods do you accept?</h3>
              <p className={styles.faqAnswer}>
                We accept all major credit cards, debit cards, and PayPal.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Can I upgrade or downgrade my plan?</h3>
              <p className={styles.faqAnswer}>
                Yes, you can change your plan at any time. Changes take effect immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
