'use client';

import { useAuth } from '@hooks/auth';
import styles from './styles.module.scss';
import Button from '@components/UI/Library/Button/Button';
import { usePathname, useRouter } from 'next/navigation';
import LogoutIcon from '@mui/icons-material/Logout';

const AdminLayout = ({ children }: { children: React.ReactNode }): JSX.Element | null => {
  const { logout, user } = useAuth();
  const pathname = usePathname();
  const nextRouter = useRouter();

  if (!user) {
    nextRouter.replace('/admin/login');
    return null
  };

  return (
    <main className={styles.AdminLayout}>
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

export default AdminLayout;
