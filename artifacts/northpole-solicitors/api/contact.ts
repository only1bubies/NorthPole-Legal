import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

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
  request: VercelRequest,
  response: VercelResponse,
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
  const firstName = fullName.split(/\s+/)[0] || fullName;
  const safeFirstName = escapeHtml(firstName);
  const submissionId = crypto.randomUUID();

  let notificationResult;
  try {
    notificationResult = await resend.emails.send(
      {
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
      },
      { idempotencyKey: `contact-notification/${submissionId}` },
    );
  } catch {
    response.status(502).json({ error: 'Unable to send your enquiry right now.' });
    return;
  }

  if (notificationResult.error) {
    response.status(502).json({ error: 'Unable to send your enquiry right now.' });
    return;
  }

  let acknowledgementSent = false;
  try {
    const acknowledgementResult = await resend.emails.send(
      {
        from: sender,
        to: email,
        replyTo: recipient,
        subject: 'We\'ve received your enquiry — NorthPole Solicitors',
        text: [
          `Dear ${firstName},`,
          '',
          'Thank you for contacting NorthPole Solicitors.',
          '',
          `We have received your enquiry regarding “${enquiry}”. A member of our team will review your message and respond as soon as possible.`,
          '',
          'Please note that submitting an enquiry through our website does not create a lawyer-client relationship. Do not send confidential or time-sensitive information until the firm has confirmed that it can act for you.',
          '',
          'Kind regards,',
          '',
          'NorthPole Solicitors',
          '19 Oguntuga Street',
          'Yaba, Lagos, Nigeria',
          '',
          recipient,
          'https://northpolesolicitors.com',
        ].join('\n'),
        html: `
          <p>Dear ${safeFirstName},</p>
          <p>Thank you for contacting NorthPole Solicitors.</p>
          <p>We have received your enquiry regarding “${safeEnquiry}”. A member of our team will review your message and respond as soon as possible.</p>
          <p>Please note that submitting an enquiry through our website does not create a lawyer-client relationship. Do not send confidential or time-sensitive information until the firm has confirmed that it can act for you.</p>
          <p>Kind regards,</p>
          <p>
            NorthPole Solicitors<br />
            19 Oguntuga Street<br />
            Yaba, Lagos, Nigeria
          </p>
          <p>
            <a href="mailto:${recipient}">${recipient}</a><br />
            <a href="https://northpolesolicitors.com">https://northpolesolicitors.com</a>
          </p>
        `,
      },
      { idempotencyKey: `contact-acknowledgement/${submissionId}` },
    );
    acknowledgementSent = !acknowledgementResult.error;
  } catch {
    acknowledgementSent = false;
  }

  if (!acknowledgementSent) {
    console.error('Contact acknowledgement email failed');
  }

  response.status(200).json({ ok: true, acknowledgementSent });
}