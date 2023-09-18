'use client';

import { ToastContainer } from 'react-toastify';

const Notification = (): JSX.Element | null => <ToastContainer
  position="top-center"
  autoClose={3000}
  closeOnClick
  hideProgressBar
  icon={false}
  className="notification"
  bodyClassName="notification_body"
  closeButton={false}
  limit={2}
/>

export default Notification;
