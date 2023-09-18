'use client';

import Section from '@components/UI/Section/Section';
import styles from './styles.module.scss';
import Button from '@components/UI/Library/Button/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRef } from 'react';

const ContactForm = (): JSX.Element | null => {
  // Config
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;

  // Handlers
  const submitContactForm = (e: Event) => {
    e.preventDefault();
    const form = formRef.current

    if (form.checkValidity() === false) {
      return toast('Please fill in all the required fields correctly.');
    }

    let enquiry: any = {}
    const formData = new FormData(form);
    formData.forEach((value, key) => enquiry[key] = value);

    axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_API_URL}/enquiry/contact`,
      data: enquiry
    })
      .then(result => {
        form.reset()
        toast('Thank you for your message. We\'ll get back to you soon!');
      })
      .catch(err => console.log(err))
  }

  return (
    <Section
      heading={<h2>Send a <span>Message</span>.</h2>}
      keywords="Message."
      className={styles.ContactForm}
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
  );
};

export default ContactForm;
