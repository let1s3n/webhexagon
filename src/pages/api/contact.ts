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
  const emailHtmlTemplate = await fs.readFileSync(
    path.resolve('./src', 'utils/emails/templates/contact.html'),
    {
      encoding: 'utf8',
    }
  );

  var templateHtml = Handlebars.compile(emailHtmlTemplate.toString());
  var bodyHtml = templateHtml(req.body);
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
