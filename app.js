const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require ('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
//view engine setup
app.engine('handlebars',exphbs());
app.set('view engine' , 'handlebars');

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//static folder
app.use('/public', express.static(path.join(__dirname,'Static Folder')));

app.get('/',(req, res) =>
{
    res.render('contact');



});

app.listen(3000,() => console.log('Server started'));

app.post ('/send' , (req, res)=>
{
  res.render('contact');
  con
   
    const output =`
    <p>You have a new contact request</p>
    <h3>Contactt Details</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Company: ${req.body.company}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}<?P>
    `;

    
  let transporter = nodemailer.createTransport({
      //put host detail bellow
    host: "imap.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user:'chessigreenfarm@gmail.com', // generated ethereal user
      pass: 'testAccount.pass', // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  res.render('contact',{msg:'Email has been sent'})
}
main().catch(console.error);

    

});
app.locals.layout = false;


