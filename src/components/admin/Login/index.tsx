'use client';

import { FieldValues, useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { useAuth } from '@hooks/auth';
import { LoginCredentials } from '@types';
import Button from '@components/UI/Library/Button/Button';
import Input from '@components/UI/Library/Input';
import Loader from '@components/UI/Loader';
import { useState } from 'react';

const AdminLoginForm = (): JSX.Element | null => {
  const { login } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  console.log(loading)
  const {
    register,
    handleSubmit,
  } = useForm();

  const handleLogin = async (loginData: FieldValues) => {
    setLoading(true);
    await login(loginData as LoginCredentials);
    setLoading(false);
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
      <Loader open={loading} />
    </div>
  );
};

export default AdminLoginForm;
