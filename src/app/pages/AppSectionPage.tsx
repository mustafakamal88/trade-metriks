import { useLocation } from 'react-router-dom';
import styles from './AppSectionPage.module.css';

interface AppSectionPageProps {
  title: string;
}

export function AppSectionPage({ title }: AppSectionPageProps) {
  const location = useLocation();

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h1>{title}</h1>
        <p>Explore the latest insights and manage your data in this workspace.</p>
      </header>
      <div className={styles.card}>
        <span className={styles.label}>Current route</span>
        <div className={styles.route}>{location.pathname}</div>
      </div>
    </section>
  );
}
