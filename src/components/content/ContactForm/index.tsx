'use client';

import Section from '@components/Layout/Section/Section';
import styles from './styles.module.scss';
import Button from '@components/UI/Button/Button';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Loader from '@components/UI/Loader';
import Input from '@components/UI/Input';
import { TContactMessage } from '@types';
import { buildContactEmail } from '@lib/email/client';
import { sendEmail } from '@lib/email/server';
import TextArea from '@components/UI/TextArea';

const ContactForm = (): JSX.Element | null => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<TContactMessage>();

  // Handlers
  const handleSubmitContactForm = async (data: TContactMessage) => {
    setLoading(true);
    try {
      await sendEmail({
        subject: 'Website Contact Message',
        body: buildContactEmail(data),
      })
      enqueueSnackbar('Thank you for your message. We will be in touch soon.');
      reset();
    } catch (e) {
      console.error(e)
      enqueueSnackbar('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section
      heading={<h2>Send a <span>Message</span>.</h2>}
      keywords="Message."
      className={styles.ContactForm}
      reverse
    >
      <form onSubmit={handleSubmit(handleSubmitContactForm)}>
        <div className={styles.row}>
          <Input
            inputProps={{
              type: 'text',
              autoComplete: 'name'
            }}
            name='name'
            register={{ ...register('name', { required: true }) }}
            label="Full Name"
            error={errors.name?.type === 'required' ? 'First name is required' : undefined}
          />
        </div>
        <div className={styles.row}>
          <Input
            inputProps={{
              type: 'email',
              autoComplete: 'email'
            }}
            name='email'
            register={{ ...register('email', { required: true }) }}
            label="Email"
            error={errors.email?.type === 'required' ? 'Email is required' : undefined}
          />
        </div>
        <div className={styles.row}>
          <TextArea
            textareaProps={{
              rows: 5
            }}
            name='message'
            register={{ ...register('message', { required: true }) }}
            label="Message"
            error={errors.message?.type === 'required' ? 'Message is required' : undefined}
          />
        </div>
        <Button icon >
          Send Message
        </Button>
      </form>
      <Loader open={loading} />
    </Section>
  );
};

export default ContactForm;
