import styles from './AuthLayout.module.css';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className={styles.layout}>
      {/* Left side: Branding */}
      <div className={styles.branding}>
        <div className={styles.brandContent}>
          <h1 className={styles.brandTitle}>TradeMetriks</h1>
          <p className={styles.brandTagline}>Master Your Trading Edge</p>
          
          {/* Decorative gradient */}
          <div className={styles.decoration}>
            <svg viewBox="0 0 400 300" className={styles.chart}>
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              
              {/* Subtle chart-like pattern */}
              <polyline
                points="20,250 80,200 140,220 200,150 260,170 320,100 380,130"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                opacity="0.3"
              />
              <polyline
                points="20,250 80,200 140,220 200,150 260,170 320,100 380,130"
                fill="url(#chartGradient)"
                opacity="0.5"
              />
            </svg>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.icon}>📊</span>
              <span>Track Every Trade</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}>📈</span>
              <span>Analyze Performance</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}>🚀</span>
              <span>Improve Your Edge</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Form */}
      <div className={styles.formSection}>
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>{title}</h2>
            {subtitle && <p className={styles.formSubtitle}>{subtitle}</p>}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
