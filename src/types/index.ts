export interface LoginCredentials {
  email: string,
  password: string
}

export interface CourseProps {
  _id: string;
  name: string;
  objective: string;
  description: string;
  price: number;
}

export interface CouponProps {
  email: string;
  code: string;
  discount: number;
  expiry: Date;
  redeemed: boolean;
}