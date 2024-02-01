// Interfaces
import { ICartItem, IProduct } from './interfaces';
import { toast } from 'react-toastify';

// INTERNAL HELPER FUNCTIONS

export const getCartLength = (): number => {
  if (getCart() === undefined || getCart().length === 0) {
    return 0
  } else {
    return getCart().length;
  }
}

export const searchCart = (productID: string): number => {
  const currentCart = getCart();
  let searchResults = 0;
  if (currentCart !== null) {
    currentCart.forEach(item => {
      if (item.id === productID) {
        searchResults++
      }
    })
  }
  return searchResults
}

// CART FUNCTIONS

export const updateCart = (product: IProduct, quantity: number): void => {
  // Get Current Cart
  let currentCart = getCart();

  // If already in cart
  if (searchCart(product.id) > 0) {
    //Find index
    const index = currentCart.findIndex((item => item.id === product.id));

    // Update Item
    currentCart[index].quantity = quantity;
  }
  // If not in cart
  else {
    // Add new Item
    const newItem = {
      id: product.id,
      quantity: quantity,
      price: product.price
    }

    // Create New Cart
    if (currentCart === null) {
      currentCart = [newItem];
    }

    // Just add to cart
    else {
      currentCart.push(newItem);
    }
  }

  // Save
  if (typeof window !== 'undefined') {
    localStorage.setItem('dmer-cart', JSON.stringify(currentCart));
  }
  toast('Cart Updated')
}

export const removeFromCart = (productID: string, notify?: boolean): void => {
  // Get Current Cart & Index of Item
  const currentCart = getCart();
  const index = currentCart.findIndex((item => item.id === productID));

  // Update Cart
  currentCart.splice(index, 1);
  if (typeof window !== 'undefined') {
    localStorage.setItem('dmer-cart', JSON.stringify(currentCart));
  }
  // updateCartCounter();
  if (notify) {
    toast('Item removed from cart')
  }
}

export const getCart = (): ICartItem[] => {
  let currentCart
  if (typeof window !== 'undefined') {
    currentCart = JSON.parse(localStorage.getItem('dmer-cart') || '[]');
  }
  return currentCart
}

export const checkCartValidity = (products: IProduct[]): void => {
  const currentCart = getCart();

  if (currentCart) {
    currentCart.forEach(item => {

      // product exists
      const product = products.find(product => product.id === item.id)
      if (!product) {
        removeFromCart(item.id)
      }

      //  product is visible
      if (product && !product.visibility) {
        removeFromCart(item.id)
      }
    })
  }
}

export const getCartTotal = (): number => {
  const currentCart = getCart();
  let total = 0;
  if (currentCart) {
    currentCart.forEach(item => {
      total += (item.price * item.quantity)
    })
  }
  return total
}


export const clearCart = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('dmer-cart');
  }
}


export const checkDigitalOnlyCart = (products: IProduct[]): boolean => {
  const currentCart = getCart();
  let digitalOnly = true;

  if (currentCart) {
    currentCart.forEach(item => {

      // product exists
      const product = products.find(product => product.id === item.id)

      //  product is visible
      if (product && !product.digital) {
        digitalOnly = false;
      }
    })
  }
  return digitalOnly
}

export const calculateDeliveryFee = (total: number, shopSettings: any): number => {
  let fee = undefined;
  for (let i = 1; i <= 3; i++) {
    const thisThreshold = shopSettings[`deliveryFee${i}`].threshold;
    const thisFee = shopSettings[`deliveryFee${i}`].fee;
    if (total <= thisThreshold) {
      fee = thisFee;
      break
    }
  }
  if (!fee) {
    fee = shopSettings.upperFee
  }
  return fee
}