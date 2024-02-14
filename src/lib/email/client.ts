import { TContactMessage } from '@types';

export const buildContactEmail = (message: TContactMessage): string => {
  let body = '';
  const keys = Object.keys(message);
  keys.forEach(key => {
    body += `<p> <b>${key.toUpperCase()}</b>: ${message[key as keyof TContactMessage]}</p>`; // Add 'as keyof TContactMessage' to cast the key to a valid index type
  });

  return `
  <p> Dear D-MER </p>
  <p>You received a new message via your website:</p>
  
  ${body}
  `;
}