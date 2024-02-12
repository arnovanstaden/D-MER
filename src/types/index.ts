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