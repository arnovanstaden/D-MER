export interface ICartItem {
    id: string;
    quantity: number;
    price: number;
}

export interface IProduct {
    id: string;
    name: string;
    description: string;
    details: string;
    visibility: boolean;
    price: number;
    category: string
    thumbnail: string;
    digital?: boolean;
    document?: string
}

export interface ICourse {
    _id: string;
    name: string;
    objective: string;
    description: string;
    price: number;
}

export interface ICheckout {
    shopSettings: any;
    products: any;
    total: number
}

export interface IOrder {
    cart_items: ICartItem[],
    amount_gross: number,
    [key: string]: any
}