import { useNavigate } from 'react-router-dom';
import styles from './AppTopbar.module.css';

export function AppTopbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <header className={styles.topbar}>
      <div className={styles.titleGroup}>
        <span className={styles.title}>TradeMetriks</span>
        <span className={styles.subtitle}>Trading analytics workspace</span>
      </div>
      <button type="button" className={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
}
