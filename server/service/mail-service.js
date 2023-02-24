// const nodemailer = require('nodemailer');

// class MailService {
//   constructor() {
//     this.trasporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: process.env.SMTP_PORT,
//       secure: false,
//       auth: {
//         user: process.env.SMTP_USER,
//         password: process.env.SMTP_PASSWORD,
//       },
//     });
//   }

//   async sendActivationMail(to, link) {
//     await this.trasporter.sendMail({
//       from: process.env.SMTP_USER,
//       to,
//       subject: 'Activation of account' + process.env.API_URL,
//       text: '',
//       html: `
//                 <div>
//                     <h1>For actication click link</h1>
//                     <a href="${link}">${link} </a>
//                 </div>
//             `,
//     });
//   }
// }

// module.exports = new MailService();

// const nodemailer = require('nodemailer');

// class MailService {
//   constructor() {
//     this.transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: false,
//       auth: {
//         user: 'maxim.burinskyi@gmail.com',
//         pass: 'Vjybnjhbyu12',
//       },
//     });
//   }

//   async sendActivationMail(to, link) {
//     await this.transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to,
//       subject: 'Активация аккаунта на ' + process.env.API_URL,
//       text: '',
//       html: `
//                     <div>
//                         <h1>Для активации перейдите по ссылке</h1>
//                         <a href="${link}">${link}</a>
//                     </div>
//                 `,
//     });
//   }
// }

// module.exports = new MailService();

const nodemailer = require('nodemailer');

const sendEmail = (receiverEmail, link) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'maxim.burinskyi@gmail.com',
      pass: process.env.SMTP_PASSWORD,
    },
  });
  return transporter.sendMail({
    from: 'No reply',
    to: receiverEmail,
    subject: 'HELLO WORLD',
    html: `
                         <div>
                            <h1>Для активации перейдите по ссылке</h1>
                            <a href="${link}">${link}</a>
                         </div>
                    `,
  });
};

module.exports = {
  sendEmail,
};
