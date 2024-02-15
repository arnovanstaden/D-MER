'use client';

import styles from './styles.module.scss';
import Button from '@components/UI/Button/Button';
import { usePathname } from 'next/navigation';
import { useAuth } from '@hooks/auth';

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }): JSX.Element | null => {
  const pathname = usePathname();


  const { user } = useAuth();
  if (!user) {
    return null;
  }

  return (
    <main className={styles.AdminDashboardLayout}>
      <header>
        <div />
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

export default AdminDashboardLayout;
