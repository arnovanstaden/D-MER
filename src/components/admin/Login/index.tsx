'use client';

import Image from 'next/image';
import { FieldValues, useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { useAuth } from '@hooks/auth';
import { ILogin } from '@types';
import Button from '@components/UI/Library/Button/Button';
import Input from '@components/UI/Library/Input';
import Notification from '@components/UI/Notifications';

const AdminLoginForm = (): JSX.Element | null => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
  } = useForm();

  const handleLogin = async (loginData: FieldValues) => login(loginData as ILogin)

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
            register={{ ...register('email') }}
          />
          <Input
            inputProps={{
              type: 'password',
              autoComplete: 'password'
            }}
            name='password'
            register={{ ...register('password') }}
          />
          <Button>Login</Button>
        </form>
      </div>

      <Notification />
    </div>
  );
};

export default AdminLoginForm;
