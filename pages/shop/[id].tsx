import { useState } from "react";
import { GetStaticProps } from 'next';
import { updateCart } from "../../utils/cart";
import { IProduct } from "../../utils/interfaces"

// Components
import Page from "../../components/UI/Page/Page";
import Container from "../../components/UI/Library/Container/Container";
import Button from "../../components/UI/Library/Button/Button";
import NextImage from "../../components/UI/Library/NextImage/NextImage";

// Styles
import styles from "../../styles/pages/shop/[id].module.scss";



export default function Product({ product }: { product: IProduct }) {
    // State
    const [quantity, setQuantity] = useState(1);

    const ProductOption = () => {
        if (product.price === 0 && product.digital) {
            return (
                <div className={styles.cart}>
                    <button className={styles.freebie}>
                        <a href={product.document} target="blank" download>Download Freebie</a>
                    </button>
                </div>
            )
        }

        return (
            <div className={styles.cart}>
                <div className={styles.quantity}>
                    <input min={1} type="number" name="quantity" value={quantity} onChange={e => setQuantity(parseInt(e.target.value))} />
                </div>
                <Button fill onClick={() => updateCart(product, quantity)}>
                    Add To Cart
                </Button>
            </div>
        )
    }

    return (
        <Page
            head={{
                title: `${product.name} | D-MER`,
                description: product.description,
                canonical: `/shop/${product.id}`
            }}
            className={styles.product}
        >

            <section>
                <Container>
                    <div className={styles.shop}>
                        <Button link="/shop">
                            Back to Shop
                        </Button>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.image}>
                            <NextImage
                                src={product.thumbnail}
                                alt={product.name}
                                width={800}
                            />
                        </div>
                        <div className={styles.content}>
                            <p className={styles.category}>{product.category}</p>
                            <h2 className={styles.name}>{product.name}</h2>
                            <p className={styles.price}>{product.price > 0 ? `R ${product.price}` : `Free`}</p>
                            <div className={styles.details}>
                                <p className={styles.active}>Description</p>
                            </div>
                            <p className={styles.description}>
                                {product.description}
                                {product.digital ? <span>This is a Digital Product</span> : null}
                            </p>
                            <ProductOption />
                        </div>
                    </div>
                </Container>
            </section>
        </Page>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${params!.id}`)
    const product = await res.json()
    return {
        props: {
            product,
        },
    }
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
    const products = await res.json()
    const paths = products.map((product: IProduct) => `/shop/${product.id}`)
    return { paths, fallback: false }
}

