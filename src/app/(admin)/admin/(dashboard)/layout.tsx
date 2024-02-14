'use client';

import styles from './styles.module.scss';
import Button from '@components/UI/Button/Button';
import { usePathname } from 'next/navigation';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from 'src/context/AuthProvider';

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }): JSX.Element | null => {
  const { logout } = useAuth();
  const pathname = usePathname();

  return (
    <main className={styles.AdminDashboardLayout}>
      <header>
        <div />
        <img src="/images/logos/Dmer-Logo.svg" alt="D-MER Logo" />
        <LogoutIcon onClick={logout} />
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
