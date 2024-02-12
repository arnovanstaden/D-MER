'use client';

import { useAuth } from '@hooks/auth';
import styles from './styles.module.scss';
import Button from '@components/UI/Library/Button/Button';
import { usePathname } from 'next/navigation';

const AdminLayout = ({ children }: { children: React.ReactNode }): JSX.Element | null => {
  useAuth();
  const pathname = usePathname();

  return (
    <main className={styles.AdminLayout}>
      <header>
        <img src="/images/logos/Dmer-Logo.svg" alt="D-MER Logo" />
      </header>
      <nav>
        <Button
          fill={pathname === '/admin'}
          link="/admin"
          className={styles.button}
        >
          Courses
        </Button>
        <Button
          fill={pathname === '/admin/bookings'}
          link="/admin/bookings"
          className={styles.button}
        >
          Bookings
        </Button>
        <Button
          fill={pathname === '/admin/coupons'}
          link="/admin/coupons"
          className={styles.button}
        >
          Coupons
        </Button>
      </nav>
      <div className={styles.content}>
        {children}
      </div>
    </main>
  );
};

export default AdminLayout;
