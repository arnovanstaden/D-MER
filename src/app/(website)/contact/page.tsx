// Components
import Landing from '@components/UI/Landing/Landing';
import Section from '@components/UI/Section/Section';
import Banner from '@components/UI/Banner/Banner';
import Button from '@components/UI/Library/Button/Button';

// Styles
import styles from './styles.module.scss';
import ContactForm from '@components/content/ContactForm';


import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | D-MER',
  description: 'Have a burning question? Get in touch!',
}

const Contact = () => (
  <main className={styles.contact}  >

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
          <a href="tel:+27760972523">+27 76 097 2523</a>
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
        Online Courses
      </Button>
    </Banner>

    <ContactForm />

    <Section
      heading={<h2><span>Find</span> Us.</h2>}
      keywords="Find Us."
      className={styles.map}
    >
      <iframe src="https://snazzymaps.com/embed/313974" />
    </Section>
  </main>
);

export default Contact
