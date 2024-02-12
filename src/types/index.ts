export interface LoginCredentials {
  email: string,
  password: string
}

export interface ICourse {
  id: string;
  name: string;
  objective: string;
  description: string;
  price: number;
}

export interface ICoupon {
  email: string;
  code: string;
  discount: number;
  expiry: Date;
  redeemed: boolean;
}

export interface INewCoupon {
  email: string,
  expiry: Date,
  discount: number,
}

export interface IBooking {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  total: number;
  courses: string[];
  date: Date;
  coupon?: string;
}