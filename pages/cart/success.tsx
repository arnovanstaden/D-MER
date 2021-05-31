import { clearCart } from "../../utils/cart";
import { useEffect } from "react"

// Components
import Page from "../../components/UI/Page/Page";
import Section from "../../components/UI/Section/Section";
import Button from "../../components/UI/Library/Button/Button";

// Styles
import styles from "../../styles/pages/cart/success.module.scss";

export default function Success() {

    useEffect(() => {
        clearCart()
    }, []);

    return (
        <Page
            head={{
                title: "Success | D-MER",
                description: "",
                canonical: "/cart/success",
                robots: false
            }}
            className={styles.success}
        >
            <Section
                heading={<h2>Transaction <span>Successful</span></h2>}
            >
                <div className={styles.content}>
                    <h3>Your transaction has been successful!</h3>
                    <p>You will receive emails confirming your order and payment.</p>
                    <p>(Be sure to check your spam box if you don't see anything)</p>
                    <Button link="/">
                        Go Home
                    </Button>
                </div>
            </Section>
        </Page>
    )
}
