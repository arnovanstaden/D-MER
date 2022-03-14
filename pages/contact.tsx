import { useRef } from "react";
import toaster from "toasted-notes";
import axios from "axios"

// Components
import Page from "../components/UI/Page/Page";
import Landing from "../components/UI/Landing/Landing";
import Section from "../components/UI/Section/Section";
import Banner from "../components/UI/Banner/Banner";
import Button from "../components/UI/Library/Button/Button";

// Styles
import styles from "../styles/pages/contact.module.scss";

const Contact = () => {
  // Config
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;

  // Handlers
  const submitContactForm = (e: Event) => {
    e.preventDefault();
    const form = formRef.current

    if (form.checkValidity() === false) {
      return toaster.notify("Please fill in all the required fields correctly.");
    }

    let enquiry: any = {}
    const formData = new FormData(form);
    formData.forEach((value, key) => enquiry[key] = value);

    axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_URL}/enquiry/contact`,
      data: enquiry
    })
      .then(result => {
        form.reset()
        toaster.notify("Thank you for your message. We'll get back to you soon!");
      })
      .catch(err => console.log(err))
  }

  return (
    <Page
      head={{
        title: "Contact | D-MER",
        description: "Have a burning question? Get in touch!",
        canonical: "/contact",
      }}
      className={styles.contact}
    >

      <Landing
        image="/images/pages/contact/landing.jpg">
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
            <a href="mailto:info@dmerworldwide.com">info@dmerworldwide.com</a>
          </li>
          <li>
            <i className="icon-pin"></i>
            <a href="https://goo.gl/maps/XLbwP14yF4yy43w2A" target="blank">23 Main Rd, Saldanha, 7395, Western Cape, South Africa</a>
          </li>
        </ul>
      </Section>

      <Banner image="/images/pages/contact/banner1.jpg">
        <h2>Start <span>Anywhere</span>. Start <span>Anytime</span>.</h2>
        <Button icon link="/courses#book">
          Book a Course
        </Button>
      </Banner>

      <Section
        heading={<h2>Send a <span>Message</span>.</h2>}
        keywords="Message."
        className={styles.form}
        reverse
      >
        <form ref={formRef}>
          <div className={styles.row}>
            <label htmlFor="Name">Your Name</label>
            <input type="text" name="Name" required />
          </div>
          <div className={styles.row}>
            <label htmlFor="Email">Your Email</label>
            <input type="email" name="Email" required />
          </div>
          <div className={styles.row}>
            <label htmlFor="Message">Your Message</label>
            <textarea name="Message" required></textarea>
          </div>
          <Button icon onClick={submitContactForm}>
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
