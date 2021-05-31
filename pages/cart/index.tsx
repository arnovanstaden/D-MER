import { getCart, getCartTotal, checkCartValidity } from "../../utils/cart";
import { IProduct, ICartItem } from "../../utils/interfaces";
import { GetStaticProps } from 'next'
import { useState, useEffect } from "react";



// Components
import CartItem from "../../components/content/CartItem/CartItem";
import Page from "../../components/UI/Page/Page";
import Checkout from "../../components/content/Checkout/Checkout";
import Container from "../../components/UI/Library/Container/Container";
import Button from "../../components/UI/Library/Button/Button";

// Styles
import styles from "../../styles/pages/cart/index.module.scss";

export default function Cart({ products, shopSettings }: { products: IProduct[], shopSettings: Object }) {
    checkCartValidity(products)
    // State
    const [loading, setLoading] = useState(true)
    const [cart, setCart] = useState(getCart());
    const [showCart, setShowCart] = useState(true);
    const [total, setTotal] = useState(getCartTotal());


    // Hydrate Cart
    useEffect(() => {
        setLoading(false)
    }, [])


    // Helpers
    const getProduct = (item: ICartItem): IProduct => {
        let product = products.find(product => product.id === item.id);
        return product!
    }

    // Handlers
    const handleCartChange = (() => {
        setCart(getCart())
        setTotal(getCartTotal())

    })

    const handleCheckoutShow = () => {
        // Check Quants
        setShowCart(false)
        handleCartChange();
    }

    const handleCartShow = () => {
        setShowCart(true)
    }


    // Components
    const CartItemGrid = () => {
        if (!loading) {
            return (
                <>
                    <div className={styles.items}>
                        {!cart || cart.length < 1 ?
                            <p>Your Cart is Empty :(</p>
                            : cart.map((item, index) => (
                                <CartItem
                                    item={item}
                                    product={getProduct(item)}
                                    key={index}
                                    handleCartChange={() => handleCartChange()} />
                            ))
                        }
                    </div>
                </>
            )
        }
        return null
    }

    const Options = () => {
        if (showCart) {
            return (
                <div className={styles.options}>
                    <Button link="/shop">
                        Back to Shop
                    </Button>
                    {!cart || cart.length < 1 ?
                        null
                        : <Button fill onClick={() => handleCheckoutShow()}>
                            Checkout
                        </Button>
                    }
                </div>
            )
        } else {
            return (
                <div className={styles.options}>
                    <Button onClick={() => handleCartShow()}>
                        Back to Cart
                    </Button>
                </div>
            )
        }
    }

    return (
        <Page
            head={{
                title: "Cart | D-MER",
                description: "",
                canonical: "/cart",
                robots: false
            }}
            className={styles.cart}
        >
            <Container>
                {
                    showCart
                        ? <h2>Your <span>Cart</span></h2>
                        : <h2>Checkout</h2>
                }
                <div className={styles.grid}>
                    {!loading ?
                        <>
                            {showCart ? <CartItemGrid /> : <Checkout shopSettings={shopSettings} total={total} products={products} />}
                            <Options />
                        </>
                        : null}
                </div>
            </Container>
        </Page >
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const productResponse = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/products`);
    const products = await productResponse.json();

    const settingsResponse = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/shopSettings`);
    const shopSettings = await settingsResponse.json();

    return {
        props: {
            products,
            shopSettings
        },
    }
}

