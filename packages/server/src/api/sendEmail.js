import mailer from '../mailer';

export default (info) => {
  // console.log('send main called', info);
  const { message, email } = info;
  mailer({
    from: 'Sawarikinbech<sawarikinbech@gmail.com>',
    to: `<${email}>`,
    subject: 'Sawarikinbech enquery reply',
    text: message,
    html: null,
  });
};
