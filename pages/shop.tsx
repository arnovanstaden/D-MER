// Components
import Page from "../components/UI/Page/Page";
import Landing from "../components/UI/Landing/Landing";
import Section from "../components/UI/Section/Section";
import Banner from "../components/UI/Banner/Banner";
import Button from "../components/UI/Library/Button/Button";


// Styles
import styles from "../styles/pages/shop.module.scss";

const Shop = () => {
    return (
        <Page
            head={{
                title: "Shop | D-MER",
                description: "Have a burning question? Get in Touch!",
                canonical: "/contact",
            }}
            className={styles.contact}
        >

            <Landing
                image="/images/pages/contact/landing.jpeg">
                <h1>All The <span>Equipment</span> And <span>Important Documents</span> You Need</h1>
            </Landing>


        </Page >
    )
}

export default Shop
