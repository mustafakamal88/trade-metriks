import { Button } from '../../../common/components';
import styles from './ContactPage.module.css';

export function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.subtitle}>
            Have questions? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Contact Info */}
            <div className={styles.info}>
              <h2 className={styles.infoTitle}>Contact Information</h2>
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <h3 className={styles.infoLabel}>Email</h3>
                  <p className={styles.infoValue}>support@trademetriks.com</p>
                </div>
                <div className={styles.infoItem}>
                  <h3 className={styles.infoLabel}>Response Time</h3>
                  <p className={styles.infoValue}>Within 24 hours</p>
                </div>
              </div>

              <div className={styles.infoSection}>
                <h3 className={styles.infoSectionTitle}>Sales Inquiries</h3>
                <p className={styles.infoSectionText}>
                  Interested in Enterprise plans or custom solutions?
                </p>
                <p className={styles.infoValue}>sales@trademetriks.com</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formContainer}>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.input}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={styles.input}
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className={styles.textarea}
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>

                <Button variant="primary" size="lg" fullWidth type="submit">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
