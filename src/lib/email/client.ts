import { getCourseList } from '@lib/courses';
import { IBooking, ICoupon, TContactMessage } from '@types';

export const buildContactEmail = (message: TContactMessage): string => {
  let body = '';
  const keys = Object.keys(message);
  keys.forEach((key) => {
    body += `<p> <b>${key.toUpperCase()}</b>: ${message[key as keyof TContactMessage]}</p>`; // Add 'as keyof TContactMessage' to cast the key to a valid index type
  });

  return `
  <p> Dear D-MER </p>
  <p>You received a new message via your website:</p>
  
  ${body}
  `;
}

export const buildCouponEmail = (coupon: Omit<ICoupon, 'id'>) => {
  return `
        <body
        style="color: #333333;max-width: 800px;margin: 0 auto;padding: 50px 0;font-family: Roboto, Verdana, sans-serif;font-size: 14.4px;">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
        <img src="https://d-mer.vercel.app/shop.png" alt=""
            style="width: 20vw;margin: auto;display: block;">
        <br/>
        <p style="font-size: 14.4px;text-align: center">
            Here is a coupon for ${coupon.discount}% off your next course booking at D-MER.
            <br> <br>
            Simply enter the code when when booking a course to receive ${coupon.discount}% off.
        </p>

        <h4 style="background-color: #da222d;color: white;padding: 5px 16px;text-align: center">${coupon.code}</h4>

        <div  style="text-align: center;">
        <a href="https://dmerworldwide.com/courses/book" style="text-align: center;padding: 6px 16px;border:2px solid #da222d;margin: auto;text-decoration:none;color: #333333;font-weight:600">Book A Course</a>
        </div>
        <br/ >
        <p style="font-size: 14.4px;font-style: italic;text-align: center">
        This code is valid until ${coupon.expiry}
        </p>
    
        </body>`
};

export const buildCourseBookingEmailUser = async (booking: Omit<IBooking, 'id'>) => {
  let body = '';
  const keys = Object.keys(booking).filter((key) => !['courses', 'total'].includes(key));
  keys.forEach(key => {
    body += `<p> <span style="font-weight: 600;">${key.toUpperCase()}</span>: ${booking[key as keyof Omit<IBooking, 'id'>]}</p>`
  });

  const courses = await getCourseList();
  const courseNames = courses.filter((course) => booking.courses.includes(course.id)).map((course) => course.name).join(', ');
  body += `<p> <span style="font-weight: 600;">Courses</span>: ${courseNames}</p>`
  body += `<p> <span style="font-weight: 600;">Total</span>: $${booking.total}</p>`

  return `
  <p> Dear ${booking.name} </p>
  <p>We received the following booking from you:</p>
  ${body}
  </br>
  <p><span style="font-weight: 600;">Payment Link</span>:
   <a href="https://www.paypal.com/paypalme/DMERWorldwide/${booking.total}"> Paypal Payment </>
   </p>
   <p span style="font-weight: 600;">Please use your Full Name and Course as payment reference </>
  <p>We'll be in touch soon!</p>
  <p>
  `
};

export const buildCourseBookingEmailMerchant = async (booking: Omit<IBooking, 'id'>) => {
  let body = '';
  const keys = Object.keys(booking).filter((key) => !['courses', 'total'].includes(key));
  keys.forEach(key => {
    body += `<p> <span style="font-weight: 600;">${key.toUpperCase()}</span>: ${booking[key as keyof Omit<IBooking, 'id'>]}</p>`
  });

  const courses = await getCourseList();
  const courseNames = courses.filter((course) => booking.courses.includes(course.id)).map((course) => course.name).join(', ');
  body += `<p> <span style="font-weight: 600;">Courses</span>: ${courseNames}</p>`
  body += `<p> <span style="font-weight: 600;">Total</span>: $${booking.total}</p>`

  return `
  <p> Dear D-MER </p>
  <p>You received a new course booking via your website:</p>
  ${body}
  <p>Remember to check your paypal account to confirm payment!</p>
  `
};
