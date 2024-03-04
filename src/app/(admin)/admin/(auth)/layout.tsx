import AdminLoginForm from '@components/admin/Login';
import styles from './styles.module.scss';

const AdminAuthLayout: React.FC = () => {
  return (
    <main className={styles.AdminLayoutAuth}>
      <header>
        <img src="/images/logos/Dmer-Logo.svg" alt="D-MER Logo" />
      </header>
      <div className={styles.content}>
        <AdminLoginForm />
      </div>
    </main>
  );
};

export default AdminAuthLayout;
