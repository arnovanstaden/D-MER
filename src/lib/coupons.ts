'use server';

import { ICoupon, INewCoupon } from '@types';
import { addFirestoreDocument, queryFirestoreDocument, updateFirestoreDocument } from './firestore';
import voucherCodes from 'voucher-code-generator';

export const getCouponByCode = async (code: string): Promise<ICoupon | undefined> => await queryFirestoreDocument<ICoupon>('coupons', 'code', code);

export const createCoupon = async (newCoupon: INewCoupon): Promise<void> => {
  const coupon: Omit<ICoupon, 'id'> = {
    ...newCoupon,
    expiry: new Date(newCoupon.expiry),
    redeemed: false,
    code: voucherCodes.generate({
      length: 30,
      count: 1
    })[0]
  }
  await addFirestoreDocument<Omit<ICoupon, 'id'>>('coupons', coupon);
}

export const expireCoupon = async (code: string): Promise<void> => {
  const coupon = await getCouponByCode(code);
  if (!coupon) return;
  await updateFirestoreDocument('coupons', coupon.id, {
    redeemed: true,
  });
}
