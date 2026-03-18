// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sendEmail } from '@/utils/emails/sendEmails';
import type { NextApiRequest, NextApiResponse } from 'next';

import fs from 'fs';
import Handlebars from 'handlebars';
import path from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { captchaToken, ...formData } = req.body;

  // Verify reCAPTCHA
  try {
    const captchaRes = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      }
    );
    const captchaData = await captchaRes.json();
    if (!captchaData.success) {
      return res.status(400).json({ message: 'Captcha verification failed' });
    }
  } catch {
    return res.status(500).json({ message: 'Captcha verification error' });
  }

  const emailHtmlTemplate = await fs.readFileSync(
    path.resolve('./src', 'utils/emails/templates/contact.html'),
    {
      encoding: 'utf8',
    }
  );

  var templateHtml = Handlebars.compile(emailHtmlTemplate.toString());
  var bodyHtml = templateHtml(formData);
  try {
    await sendEmail({
      to: ['dhuaytalla@hexagonstudio.pe', 'jcarneiro@hexagonstudio.pe'],
      from: 'noreply@hexagonstudio.pe',
      subject: 'Contacto',
      message: bodyHtml,
    });
    res.status(200).json({ message: 'Message Sent' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
