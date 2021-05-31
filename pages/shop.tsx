import { GetStaticProps } from 'next';
import { useState, useRef } from "react";
import { sortProducts } from "../utils/general";
import { IProduct } from "../utils/interfaces";

// Components
import Page from "../components/UI/Page/Page";
import Landing from "../components/UI/Landing/Landing";
import Section from "../components/UI/Section/Section";
import Container from "../components/UI/Library/Container/Container";
import Product from "../components/content/Product/Product";

// Styles
import styles from "../styles/pages/shop.module.scss";

const Shop = ({ products }: { products: IProduct[] }) => {
    // Refs
    const sortRef = useRef() as React.MutableRefObject<HTMLSelectElement>;

    // State
    const [filter, setFilter] = useState("All Products");
    const [productsToShow, setProductsToShow] = useState(sortProducts(products, "name"))

    // Handlers

    const handleFilter = (clickedElement: any) => {
        // Active Category
        const tabs = document.querySelectorAll(`.${styles.categories} button`);
        tabs.forEach((elem) => {
            elem.classList.remove(styles.active)
        })
        clickedElement.target.classList.add(styles.active);
        setFilter(clickedElement.target.textContent)
    }

    const handleSort = () => {
        let select = sortRef.current as HTMLSelectElement;
        setProductsToShow(sortProducts([...products], select.value));
        console.log(productsToShow)
    }

    // SubComponent

    return (
        <Page
            head={{
                title: "Shop | D-MER",
                description: "Shop all the equipment and important documents you need.",
                canonical: "/shop",
            }}
            className={styles.shop}
        >

            <Landing
                image="/images/pages/shop/landing.jpg">
                <h1>All The <span>Equipment</span> And <span>Important Documents</span> You Need</h1>
            </Landing>

            <section className={styles.content}>
                <Container>
                    <div className={styles.categories}>
                        <button className={`${styles.button} ${styles.active}`} onClick={(e) => handleFilter(e)}>All Products</button>
                        <button className={styles.button} onClick={(e) => handleFilter(e)}>Medical Equipment</button>
                        <button className={styles.button} onClick={(e) => handleFilter(e)}>Guidance Documents</button>
                    </div>
                    <div className={styles.sort}>
                        <label htmlFor="sort">Sort By:</label>
                        <select name="sort" id="sort" onChange={handleSort} ref={sortRef}>
                            <option value="name">Name</option>
                            <option value="price">Price</option>
                        </select>
                    </div>
                    <div className={styles.grid}>
                        {productsToShow.map((product, index) => (
                            (filter === "All Products" || filter === product.category) ? < Product {...product} key={index} /> : null
                        ))}
                    </div>
                </Container>
            </section>
        </Page >
    )
}

export default Shop

export const getStaticProps: GetStaticProps = async () => {
    const productResponse = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/products`);
    const products = await productResponse.json();

    return {
        props: {
            products
        },
    }
}
