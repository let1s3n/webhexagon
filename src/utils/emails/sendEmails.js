import AWS from 'aws-sdk';
import '../envConfig';

/* console.log('process.env.AWS_ACCESS_KEY_ID: ', process.env.AWS_ACCESS_KEY_ID); */

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const ses = new AWS.SES({ apiVersion: 'latest' });

export async function sendEmail({ to, from, subject, message }) {
  const params = {
    Source: from,
    Destination: { ToAddresses: [to] },
    Message: {
      Subject: { Data: subject },
      Body: { Html: { Data: message } },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    /* console.log('Email sent:', result.MessageId); */
    return result.MessageId;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
