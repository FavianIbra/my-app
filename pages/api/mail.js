// const mail = require('@sendgrid/mail'); 

// mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

// export default async (req, res) => {
//     const body = JSON.parse(req.body);

//     const message = `
//     Name: ${body.nameTrue}\r\n
//     Email: ${body.emailTrue}\r\n
//     Message: ${body.messageTrue}
//     `;

//     await mail.send({
//         to: 'acekisch@gmail.com',
//         from: 'ace@acekisch.com',
//         subject: 'New portfolio contact message',
//         text: message, 
//         html: message.replace(/\r\n/g, '<br>')
//     });

//     res.status(200).json({ status: 'Ok' })
    
//   }