'use client';

import { FieldValues, useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { LoginCredentials } from '@types';
import Button from '@components/UI/Button/Button';
import Input from '@components/UI/Input';
import { useAuth } from 'src/context/AuthProvider';
import { useRouter } from 'next/navigation';

const AdminLoginForm = (): JSX.Element | null => {
  const { login, user } = useAuth();
  const router = useRouter();

  if (user) {
    router.push('/admin')
  }

  const {
    register,
    handleSubmit,
  } = useForm();

  const handleLogin = async (loginData: FieldValues) => {
    await login(loginData as LoginCredentials);
  }

  return (
    <div className={styles.AdminLogin}>
      <div className={styles.content}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Input
            inputProps={{
              type: 'email',
              autoComplete: 'email'
            }}
            name='email'
            register={{ ...register('email', { required: true }) }}
          />
          <Input
            inputProps={{
              type: 'password',
              autoComplete: 'password'
            }}
            name='password'
            register={{ ...register('password', { required: true }) }}
          />
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginForm;
