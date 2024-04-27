import AWS from 'aws-sdk';
import '../envConfig';

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.AMAZON_ACCESS_KEY_ID,
  secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY,
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
