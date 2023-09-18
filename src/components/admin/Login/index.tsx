import Image from 'next/image';
import { FieldValues, useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import { useAuth } from '@hooks/auth';
import { ILogin } from '@types';
import Button from '@components/UI/Library/Button/Button';
import Input from '@components/UI/Library/Input';

const AdminLoginForm = (): JSX.Element | null => {
  const nextRouter = useRouter();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
  } = useForm();

  const handleLogin = async (loginData: FieldValues) => login(loginData as ILogin)

  return (
    <div className={styles.AdminLogin}>
      <div className="top">
        <div className={styles.topBar}>
          <Image src="/images/logos/logo-mark.svg" width={32} height={32} alt="Gemma Institute Logo" />
          <h1>D-MER</h1>
        </div>
      </div>
      <div className={styles.content}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <input type="text" />
          <Input
            type='email'
            name='email'
            register={{ ...register('email') }}
          />
          <Input
            type='password'
            name='password'
            register={{ ...register('password') }}
          />
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginForm;
