import type { IncomingMessage, ServerResponse } from 'node:http';
import { Resend } from 'resend';

type ContactRequest = IncomingMessage & {
  body?: unknown;
};

type ContactResponse = ServerResponse & {
  status: (code: number) => ContactResponse;
  json: (body: unknown) => void;
};

const resend = new Resend(process.env.RESEND_API_KEY);
const recipient = 'info@northpolesolicitors.com';
const sender = 'NorthPole Solicitors <website@northpolesolicitors.com>';

function getBody(body: unknown): Record<string, unknown> | null {
  if (body && typeof body === 'object' && !Array.isArray(body)) {
    return body as Record<string, unknown>;
  }

  if (typeof body === 'string') {
    try {
      const parsed = JSON.parse(body);
      return parsed && typeof parsed === 'object' && !Array.isArray(parsed)
        ? parsed
        : null;
    } catch {
      return null;
    }
  }

  return null;
}

function getString(body: Record<string, unknown>, field: string): string {
  return typeof body[field] === 'string' ? body[field].trim() : '';
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      })[character] ?? character,
  );
}

export default async function handler(
  request: ContactRequest,
  response: ContactResponse,
) {
  if (request.method !== 'POST') {
    response.status(405).json({ error: 'Method not allowed.' });
    return;
  }

  const body = getBody(request.body);
  if (!body) {
    response.status(400).json({ error: 'Invalid request.' });
    return;
  }

  if (getString(body, 'website')) {
    response.status(400).json({ error: 'Unable to process this enquiry.' });
    return;
  }

  const fullName = getString(body, 'fullName');
  const email = getString(body, 'email');
  const telephone = getString(body, 'telephone');
  const enquiry = getString(body, 'enquiry');
  const message = getString(body, 'message');
  const submittedAt = Number(body.submittedAt);
  const now = Date.now();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telephonePattern = /^[+()\d][+()\d\s.-]{6,24}$/;
  const isTooFast = !Number.isFinite(submittedAt) || now - submittedAt < 2000;
  const isFutureDated = now - submittedAt < -5 * 60 * 1000;

  if (
    !fullName ||
    fullName.length > 120 ||
    !emailPattern.test(email) ||
    email.length > 254 ||
    !telephonePattern.test(telephone) ||
    !enquiry ||
    enquiry.length > 160 ||
    !message ||
    message.length > 5000 ||
    isTooFast ||
    isFutureDated
  ) {
    response.status(400).json({ error: 'Please check all fields and try again.' });
    return;
  }

  const safeName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safeTelephone = escapeHtml(telephone);
  const safeEnquiry = escapeHtml(enquiry);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  const { error } = await resend.emails.send({
    from: sender,
    to: recipient,
    replyTo: email,
    subject: `New Website Enquiry – ${enquiry}`,
    text: [
      'New Website Enquiry',
      '',
      `Full Name: ${fullName}`,
      `Email Address: ${email}`,
      `Telephone: ${telephone}`,
      `General Nature of Enquiry: ${enquiry}`,
      '',
      'Message:',
      message,
    ].join('\n'),
    html: `
      <h2>New Website Enquiry</h2>
      <p><strong>Full Name:</strong> ${safeName}</p>
      <p><strong>Email Address:</strong> ${safeEmail}</p>
      <p><strong>Telephone:</strong> ${safeTelephone}</p>
      <p><strong>General Nature of Enquiry:</strong> ${safeEnquiry}</p>
      <h3>Message</h3>
      <p>${safeMessage}</p>
    `,
  });

  if (error) {
    console.error('Resend contact email failed:', error);
    response.status(502).json({ error: 'Unable to send your enquiry right now.' });
    return;
  }

  response.status(200).json({ ok: true });
}