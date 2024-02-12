'use client';

import Input from '@components/UI/Library/Input';
import styles from './styles.module.scss';
import { useState } from 'react';
import { INewCoupon } from '@types';
import Button from '@components/UI/Library/Button/Button';
import { enqueueSnackbar } from 'notistack';
import { createCoupon } from '@lib/coupons';
import Loader from '@components/UI/Loader';

const initialState: INewCoupon = {
  email: '',
  expiry: new Date(),
  discount: 0,
}

const CreateCoupons: React.FC = (props) => {
  const [coupon, setCoupon] = useState<INewCoupon>(initialState);
  const [loading, setLoading] = useState<boolean>(false);

  const updateCoupon = (update: Partial<INewCoupon>) => setCoupon((prev) => ({
    ...prev,
    ...update,
  }));

  const validateForm = (): boolean => {
    if (coupon.discount < 1) {
      enqueueSnackbar('Invalid Discount');
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(coupon.email)) {
      enqueueSnackbar('Invalid Email')
      return false;
    }

    return true
  }

  const handleCreateCoupon = async () => {
    const validForm = validateForm();
    if (!validForm) return;
    setLoading(true);
    await createCoupon(coupon)
    setCoupon(initialState);
    enqueueSnackbar('Coupon created & sent to client');
    setLoading(false);
  }

  return (
    <div className={styles.CreateCoupons}>
      <div className={styles.actions}>
        <Button fill onClick={handleCreateCoupon}>
          Create Coupon
        </Button>
      </div>
      <form action="">
        <Input
          label='Email'
          name="email"
          inputProps={{
            required: true,
            type: 'email',
          }}
          value={coupon.email}
          onChange={(newValue) => updateCoupon({ email: newValue as string })}
        />
        <Input
          label='Discount %'
          name="discount"
          inputProps={{
            required: true,
            type: 'number',
            max: 100,
            min: 1,
          }}
          value={coupon.discount}
          onChange={(newValue) => updateCoupon({ discount: newValue as number })}
        />
        <Input
          label='Expiry date'
          name="Expiry"
          inputProps={{
            required: true,
            type: 'date',
          }}
          value={new Date(coupon.expiry).toISOString().slice(0, 10)}
          onChange={(newValue) => updateCoupon({ expiry: new Date(newValue) })}
        />
      </form>
      <Loader open={loading} />
    </div>
  );
};

export default CreateCoupons;
