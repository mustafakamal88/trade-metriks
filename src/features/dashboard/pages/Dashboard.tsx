import { useAuth } from '../../../common/context/useAuth';
import { Button } from '../../../common/components';
import styles from './Dashboard.module.css';

export function Dashboard() {
  const { user, profile, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Welcome, {profile?.full_name || user?.email}</h1>
        <Button variant="secondary" onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>

      <div className={styles.content}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Dashboard</h2>
          <p className={styles.cardText}>
            Welcome to TradeMetriks! This is your trading dashboard. More features coming soon.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.stat}>
            <div className={styles.statValue}>0</div>
            <div className={styles.statLabel}>Total Trades</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>0%</div>
            <div className={styles.statLabel}>Win Rate</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>$0</div>
            <div className={styles.statLabel}>Total P&L</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>0</div>
            <div className={styles.statLabel}>Avg Duration</div>
          </div>
        </div>
      </div>
    </div>
  );
}
