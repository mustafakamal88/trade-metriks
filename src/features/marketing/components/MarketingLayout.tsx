import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../../../common/components';
import styles from './MarketingLayout.module.css';

export function MarketingLayout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
