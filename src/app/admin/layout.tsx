'use client';

import { useAuth } from '@hooks/auth';
import styles from './styles.module.scss';

const AdminLayout = ({ children }: { children: React.ReactNode }): JSX.Element | null => {
  useAuth();

  return (
    <main className={styles.AdminLayout}>
      <header>
        <img src="/images/logos/Dmer-Logo.svg" alt="D-MER Logo" />
      </header>
      <div className={styles.content}>
        {children}
      </div>
    </main>
  );
};

export default AdminLayout;
