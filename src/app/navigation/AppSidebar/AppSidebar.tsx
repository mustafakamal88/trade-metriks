import { useEffect, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidenav, Nav, Box } from 'rsuite';
import DashboardIcon from '@rsuite/icons/Dashboard';
import PeoplesIcon from '@rsuite/icons/Peoples';
import SettingIcon from '@rsuite/icons/Setting';
import PieChartIcon from '@rsuite/icons/PieChart';
import DataAuthorizeIcon from '@rsuite/icons/DataAuthorize';
import styles from './AppSidebar.module.css';

const SIDEBAR_STORAGE_KEY = 'tm_sidebar_expanded';

const routeMap: Record<string, string> = {
  '1': '/app/overview',
  '2-1': '/app/journal',
  '2-2': '/app/journal/tags',
  '3-1': '/app/analytics/overview',
  '3-2': '/app/analytics/performance',
  '3-3': '/app/analytics/risk',
  '3-4': '/app/analytics/calendar',
  '4-1': '/app/brokers/accounts',
  '4-2': '/app/brokers/sync-jobs',
  '4-3': '/app/brokers/settings',
  '5-1': '/app/settings/profile',
  '5-2': '/app/settings/appearance',
  '5-3': '/app/settings/billing',
};

const defaultOpenKeys = ['2', '3', '4', '5'];

interface AppSidebarProps {
  expanded: boolean;
  activeKey: string;
  onToggleExpanded: (nextExpanded: boolean) => void;
}

interface NavIconItemProps {
  eventKey: string;
  icon: ReactNode;
  label: string;
  active: boolean;
  onClick: (eventKey: string) => void;
}

function NavIconItem({ eventKey, icon, label, active, onClick }: NavIconItemProps) {
  return (
    <button
      type="button"
      className={`${styles.iconButton} ${active ? styles.iconButtonActive : ''}`}
      aria-label={label}
      onClick={() => onClick(eventKey)}
    >
      {icon}
    </button>
  );
}

export function AppSidebar({ expanded, activeKey, onToggleExpanded }: AppSidebarProps) {
  const navigate = useNavigate();

  const handleSelect = (eventKey: string | null) => {
    if (!eventKey) {
      return;
    }

    const target = routeMap[eventKey];
    if (target) {
      navigate(target);
    }
  };

  const handleToggle = (nextExpanded: boolean) => {
    onToggleExpanded(nextExpanded);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(SIDEBAR_STORAGE_KEY, String(nextExpanded));
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(SIDEBAR_STORAGE_KEY, String(expanded));
    }
  }, [expanded]);

  const collapsedItems = [
    { eventKey: '1', label: 'Overview', icon: <DashboardIcon /> },
    { eventKey: '2-1', label: 'Journal', icon: <PeoplesIcon /> },
    { eventKey: '3-1', label: 'Analytics', icon: <PieChartIcon /> },
    { eventKey: '4-1', label: 'Broker Sync', icon: <DataAuthorizeIcon /> },
    { eventKey: '5-1', label: 'Settings', icon: <SettingIcon /> },
  ];

  const isCollapsedItemActive = (eventKey: string) => {
    if (eventKey.includes('-')) {
      const prefix = `${eventKey.split('-')[0]}-`;
      return activeKey.startsWith(prefix);
    }
    return activeKey === eventKey;
  };

  return (
    <div className={styles.wrapper} data-expanded={expanded ? 'true' : 'false'}>
      <Box className={styles.brand}>
        <div className={styles.logo} />
        {expanded && (
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>TradeMetriks</span>
            <span className={styles.brandSubtitle}>App Console</span>
          </div>
        )}
      </Box>
      <Sidenav
        className={styles.sidenav}
        appearance="subtle"
        expanded={expanded}
        defaultOpenKeys={defaultOpenKeys}
      >
        <Sidenav.Body>
          {expanded ? (
            <Nav activeKey={activeKey} onSelect={handleSelect} className={styles.nav}>
              <Nav.Item eventKey="1" icon={<DashboardIcon />} data-testid="tm-nav-overview">
                Overview
              </Nav.Item>
              <Nav.Menu
                eventKey="2"
                title="Journal"
                icon={<PeoplesIcon />}
                data-testid="tm-nav-journal"
              >
                <Nav.Item eventKey="2-1">Trades</Nav.Item>
                <Nav.Item eventKey="2-2">Tags</Nav.Item>
              </Nav.Menu>
              <Nav.Menu eventKey="3" title="Analytics" icon={<PieChartIcon />}>
                <Nav.Item eventKey="3-1">Overview</Nav.Item>
                <Nav.Item eventKey="3-2">Performance</Nav.Item>
                <Nav.Item eventKey="3-3">Risk</Nav.Item>
                <Nav.Item eventKey="3-4">Calendar</Nav.Item>
              </Nav.Menu>
              <Nav.Menu eventKey="4" title="Broker Sync" icon={<DataAuthorizeIcon />}>
                <Nav.Item eventKey="4-1">Accounts</Nav.Item>
                <Nav.Item eventKey="4-2">Sync Jobs</Nav.Item>
                <Nav.Item eventKey="4-3">Settings</Nav.Item>
              </Nav.Menu>
              <Nav.Menu eventKey="5" title="Settings" icon={<SettingIcon />}>
                <Nav.Item eventKey="5-1">Profile</Nav.Item>
                <Nav.Item eventKey="5-2">Appearance</Nav.Item>
                <Nav.Item eventKey="5-3">Billing</Nav.Item>
              </Nav.Menu>
            </Nav>
          ) : (
            <div className={styles.collapsedNav}>
              {collapsedItems.map((item) => (
                <NavIconItem
                  key={item.eventKey}
                  eventKey={item.eventKey}
                  icon={item.icon}
                  label={item.label}
                  active={isCollapsedItemActive(item.eventKey)}
                  onClick={handleSelect}
                />
              ))}
            </div>
          )}
        </Sidenav.Body>
        <div className={styles.sidenavFooter}>
          <Sidenav.Toggle onToggle={handleToggle} />
        </div>
      </Sidenav>
    </div>
  );
}
