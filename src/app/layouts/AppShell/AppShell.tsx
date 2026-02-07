import { useMemo, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AppSidebar } from '../../navigation/AppSidebar/AppSidebar';
import { AppTopbar } from '../../navigation/AppTopbar/AppTopbar';
import styles from './AppShell.module.css';

const SIDEBAR_STORAGE_KEY = 'tm_sidebar_expanded';

function getActiveKey(pathname: string): string {
  if (pathname.startsWith('/app/overview')) {
    return '1';
  }

  if (pathname.startsWith('/app/journal/tags')) {
    return '2-2';
  }

  if (pathname.startsWith('/app/journal')) {
    return '2-1';
  }

  if (pathname.startsWith('/app/analytics/calendar')) {
    return '3-4';
  }

  if (pathname.startsWith('/app/analytics/risk')) {
    return '3-3';
  }

  if (pathname.startsWith('/app/analytics/performance')) {
    return '3-2';
  }

  if (pathname.startsWith('/app/analytics')) {
    return '3-1';
  }

  if (pathname.startsWith('/app/brokers/accounts')) {
    return '4-1';
  }

  if (pathname.startsWith('/app/brokers/sync-jobs')) {
    return '4-2';
  }

  if (pathname.startsWith('/app/brokers/settings')) {
    return '4-3';
  }

  if (pathname.startsWith('/app/settings/profile')) {
    return '5-1';
  }

  if (pathname.startsWith('/app/settings/appearance')) {
    return '5-2';
  }

  if (pathname.startsWith('/app/settings/billing')) {
    return '5-3';
  }

  if (pathname.startsWith('/app/settings')) {
    return '5-1';
  }

  return '1';
}

export function AppShell() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(() => {
    if (typeof window === 'undefined') {
      return true;
    }

    const stored = window.localStorage.getItem(SIDEBAR_STORAGE_KEY);
    if (stored === null) {
      return true;
    }

    return stored === 'true';
  });

  const activeKey = useMemo(() => getActiveKey(location.pathname), [location.pathname]);

  const handleToggleExpanded = (nextExpanded: boolean) => {
    setExpanded(nextExpanded);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(SIDEBAR_STORAGE_KEY, String(nextExpanded));
    }
  };

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <AppSidebar
          expanded={expanded}
          activeKey={activeKey}
          onToggleExpanded={handleToggleExpanded}
        />
      </aside>
      <div className={styles.main}>
        <AppTopbar />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
