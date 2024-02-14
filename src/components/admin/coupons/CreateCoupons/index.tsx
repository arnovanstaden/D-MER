'use client';

import Input from '@components/UI/Input';
import styles from './styles.module.scss';
import { useState } from 'react';
import { ICoupon } from '@types';
import Button from '@components/UI/Button/Button';
import { enqueueSnackbar } from 'notistack';
import { createCoupon } from '@lib/coupons';
import Loader from '@components/UI/Loader';
import { useForm } from 'react-hook-form';

const CreateCoupons: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ICoupon>();

  const handleCreateCoupon = async (coupon: ICoupon) => {
    setLoading(true);
    await createCoupon(coupon)
    enqueueSnackbar('Coupon created & sent to client');
    setLoading(false);
    reset()
  }

  return (
    <div className={styles.CreateCoupons}>
      <div className={styles.actions}>
        <Button fill onClick={handleSubmit(handleCreateCoupon)}>
          Create Coupon
        </Button>
      </div>
      <form>
        <Input
          label='Email'
          name="email"
          inputProps={{
            type: 'email',
          }}
          register={{ ...register('email', { required: true }) }}
          error={errors.email?.type === 'required' ? 'Email is required' : undefined}
        />
        <Input
          label='Discount %'
          name="discount"
          inputProps={{
            type: 'number',
          }}
          register={{ ...register('discount', { required: true, min: 1, max: 100 }) }}
          error={errors.discount?.type === 'required' ? 'Discount is required' : undefined}
        />
        <Input
          label='Expiry date'
          name="expiry"
          inputProps={{
            type: 'date',
          }}
          register={{ ...register('expiry', { required: true }) }}
          error={errors.expiry?.type === 'required' ? 'Expiry is required' : undefined}
        />
      </form>
      <Loader open={loading} />
    </div>
  );
};

export default CreateCoupons;
