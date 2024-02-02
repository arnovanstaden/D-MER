'use client';

import { useAuth } from '@hooks/auth';
import styles from './styles.module.scss';
import Button from '@components/UI/Library/Button/Button';
import { usePathname } from 'next/navigation';

const AdminLayoutAuth = ({ children }: { children: React.ReactNode }): JSX.Element | null => {
  useAuth();
  const pathname = usePathname();

  return (
    <main className={styles.AdminLayoutAuth}>
      <header>
        <img src="/images/logos/Dmer-Logo.svg" alt="D-MER Logo" />
      </header>
      <div className={styles.content}>
        {children}
      </div>
    </main>
  );
};

export default AdminLayoutAuth;
