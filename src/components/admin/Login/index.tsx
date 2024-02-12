'use client';

import { FieldValues, useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { useAuth } from '@hooks/auth';
import { LoginCredentials } from '@types';
import Button from '@components/UI/Library/Button/Button';
import Input from '@components/UI/Library/Input';

const AdminLoginForm = (): JSX.Element | null => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
  } = useForm();

  const handleLogin = async (loginData: FieldValues) => login(loginData as LoginCredentials)

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
