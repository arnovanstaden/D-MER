import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { getCart, getCartTotal, checkDigitalOnlyCart, calculateDeliveryFee } from "../../../utils/cart";
import { toast } from 'react-toastify';
import { ICheckout, IOrder } from "../../../utils/interfaces"

// Components
import Button from "../../UI/Library/Button/Button";

// Styles
import styles from "./checkout.module.scss";



export default function Checkout({ shopSettings, total, products }: ICheckout) {

  // Config
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const amountRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const orderNumberRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  // State
  const [deliveryFee, setDeliveryFee] = useState(0);

  useEffect(() => {
    if (checkDigitalOnlyCart(products)) {
      setDeliveryFee(0)
    } else {
      setDeliveryFee(calculateDeliveryFee(total, shopSettings))
    }
  })


  const calcTotal = () => {
    return getCartTotal() + deliveryFee
  }


  const orderConfirmation = (e: Event) => {
    e.preventDefault();

    const form = formRef.current

    if (form.checkValidity() === false) {
      return toast("Please fill in all the required fields correctly.");
    }

    toast("Your order is being processed. You'll be redirected to Payfast momentarily...")
    let order: IOrder = {
      cart_items: [],
      amount_gross: 0
    }
    const formData = new FormData(form);
    formData.forEach((value, key) => order[key] = value);
    order.cart_items = getCart()
    order.amount_gross = calcTotal();
    console.log(order)

    axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_URL}/orders/confirmation`,
      data: order
    })
      .then(result => {
        toast("Order confirmed. Redirecting to Payfast");
        initPayment(order, result.data.order_number)
      })
      .catch(err => console.log(err))
  }

  const initPayment = (order: IOrder, order_number: string) => {
    amountRef.current.value = `${order.amount_gross}`;
    orderNumberRef.current.value = order_number;
    formRef.current.submit()
  }

  return (
    <div className={styles.grid}>
      <div className={styles.form}>
        <form action="https://www.payfast.co.za/eng/process" method="POST" id="checkout-form" ref={formRef}>
          <div className={styles.row}>
            <div>
              <input type="text" name="name_first" placeholder="First Name" required />
            </div>
            <div>
              <input type="text" name="name_last" placeholder="Last Name" required />
            </div>
          </div>
          <div className={styles.row}>
            <div>
              <input type="email" name="email_address" placeholder="Email Address" required />
            </div>
            <div>
              <input type="tel" name="cell_number" placeholder="Phone Number" required />
            </div>
          </div>
          <div className={styles.row}>
            <textarea name="delivery_address" placeholder="Delivery Address"></textarea>
          </div>
          <div className={styles.row}>
            <div>
              <input type="text" name="city" placeholder="City" required />
            </div>
            <div>
              <input type="text" name="postcode" placeholder="Post Code" required />
            </div>
          </div>
          <div className={styles.row}>
            <textarea name="delivery_notes" placeholder="Delivery Notes"></textarea>
          </div>
          <input type="hidden" name="merchant_id" value={process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_ID} />
          <input type="hidden" name="merchant_key" value={process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_KEY} />
          <input type="hidden" name="return_url" value="http://www.dmerworldwide.com/success" />
          <input type="hidden" name="notify_url" value={`${process.env.NEXT_PUBLIC_API_URL}/orders/`} />
          <input type="hidden" name="cancel_url" value="http://www.dmerworldwide.com/cart" />
          <input type="hidden" name="item_name" value="D-MER Cart" />
          <input type="hidden" name="amount" value="" ref={amountRef} />
          <input type="hidden" name="custom_str1" value="" ref={orderNumberRef} />
        </form>
      </div>

      <div className={styles.summary}>
        <h2>Order Summary</h2>
        <div className={styles.row}>
          <p>Subtotal</p>
          <h6>R {getCartTotal()}</h6>
        </div>
        <div className={styles.row}>
          <p>Shipping</p>
          <h6>R {deliveryFee}</h6>
        </div>
        <div className={`${styles.total} ${styles.row}`}>
          <p>Total</p>
          <h6>R {calcTotal()}</h6>
        </div>
        <Button fill onClick={orderConfirmation}>
          Pay Now
        </Button>

      </div>
    </div>
  )
}

