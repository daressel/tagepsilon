import emailjs from '@emailjs/browser';

const mailer = {
  service: 'service_9sitc7e',
  template: 'template_80f4gyb',
  public: '0jcItBm9aVGvY3PJy',
};

export const sendMail = async (values) => {
  await emailjs.send(
    mailer.service,
    mailer.template,
    {
      ...values,
    },
    mailer.public
  );
};
