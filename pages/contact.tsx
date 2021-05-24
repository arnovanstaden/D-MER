// Components
import Page from "../components/UI/Page/Page";
import Landing from "../components/UI/Landing/Landing";
import Section from "../components/UI/Section/Section";
import Banner from "../components/UI/Banner/Banner";
import Button from "../components/UI/Library/Button/Button";


// Styles
import styles from "../styles/pages/contact.module.scss";

const Contact = () => {
    return (
        <Page
            head={{
                title: "Contact | D-MER",
                description: "Have a burning question? Get in Touch!",
                canonical: "/contact",
            }}
            className={styles.contact}
        >

            <Landing
                image="/images/pages/contact/landing.jpeg">
                <h1>Find Out More By <span>Getting In Touch</span></h1>
            </Landing>

            <Section
                heading={<h2><span>Contact</span> Us.</h2>}
                keywords="Contact Us."
                className={styles.details}
            >
                <h3>The D+MER Golden Thread</h3>
                <p>
                    For any queries relating to the courses we provide or the services we offer, please don't hesitate to contact us using your preferred method below.
                </p>
                <ul>
                    <li>
                        <i className="icon-phone"></i>
                        <a href="tel:0123456789">012 345 6789</a>
                    </li>
                    <li>
                        <i className="icon-mail"></i>
                        <a href="mailto:info@dmerworldwide.com ">info@dmerworldwide.com </a>
                    </li>
                    <li>
                        <i className="icon-pin"></i>
                        <a href="https://goo.gl/maps/XLbwP14yF4yy43w2A" target="blank">23 Main Rd, Saldanha, 7395, Western Cape, South Africa</a>
                    </li>
                </ul>
            </Section>

            <Banner image="/images/pages/contact/banner1.jpeg">
                <h2>Start <span>Anywhere</span>. Start <span>Anytime</span>.</h2>
                <Button icon>
                    Book a Course
                </Button>
            </Banner>

            <Section
                heading={<h2>Send a <span>Message</span>.</h2>}
                keywords="Message."
                className={styles.form}
                reverse
            >
                <form>
                    <div className={styles.row}>
                        <label htmlFor="Name">Your Name</label>
                        <input type="text" name="Name" />
                    </div>
                    <div className={styles.row}>
                        <label htmlFor="Email">Your Email</label>
                        <input type="email" name="Email" />
                    </div>
                    <div className={styles.row}>
                        <label htmlFor="Message">Your Message</label>
                        <textarea name="Message"></textarea>
                    </div>
                    <Button icon>
                        Send Message
                    </Button>
                </form>
            </Section>

            <Section
                heading={<h2><span>Find</span> Us.</h2>}
                keywords="Find Us."
                className={styles.map}
            >
                <iframe src="https://snazzymaps.com/embed/313974" />
            </Section>

        </Page>
    )
}

export default Contact
