'use server';

import { ICoupon, INewCoupon } from '@types';
import { addFirestoreDocument, getFirestoreDocument, queryFirestoreDocument, updateFirestoreDocument } from './firestore';
import voucherCodes from 'voucher-code-generator';

export const getCouponByCode = async (code: string): Promise<ICoupon | undefined> => await queryFirestoreDocument<ICoupon>('coupons', 'code', code);

export const createCoupon = async (newCoupon: INewCoupon): Promise<void> => {
  const coupon: ICoupon = {
    ...newCoupon,
    expiry: new Date(newCoupon.expiry),
    redeemed: false,
    code: voucherCodes.generate({
      length: 30,
      count: 1
    })[0]
  }
  await addFirestoreDocument<ICoupon>('coupons', coupon);
}

export const expireCoupon = async (id: string): Promise<void> => {
  await updateFirestoreDocument('coupons', id, {
    expired: true,
  });
}
