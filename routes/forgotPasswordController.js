const express = require('express');
const crypto = require('crypto');
const User = require('../models/User');
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const validateInput = require('../helpers/validations/forgotPassword');

const router = express.Router();

router.post('/', (req, res) => {
  const { isValid, errors } = validateInput(req.body);

  if (!isValid) { return res.status(400).send(errors); }

  const { email } = req.body;

  // User.findOne({ email })
  //   .then((user) => {
  //     if (!user) { return res.status(404).json({ email: 'user with this email is not found' }); }

  //     crypto.randomBytes(20, (err, buf) => {
  //       const token = buf.toString('hex');
  //       if (err) { return res.status(500).json({ error: 'something went wrong' }); }

  //       user.resetPasswordToken = token;
  //       user.resetPasswordExpires = Date.now() + 3600000;
  //       user.save()
  //         .then(() => {
  //           const auth = {
  //             auth: {
  //               api_key: 'key-00964dac06108f1f53f954a00b839f43',
  //               domain: 'sandbox13d1f30fde414d98ae20e2ef541f71eb.mailgun.org',
  //             },
  //           };

  //           const transporter = nodemailer.createTransport(mg(auth));

  //           return transporter.sendMail({
  //             from: '"Cloverfield 👻" <vooxi@gmail.com>',
  //             to: user.email,
  //             subject: 'Password reset',
  //             text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.
  //                   Please click on the following link, or paste this into your browser to complete the process: http://${req.headers.host}/reset/${token}
  //                   If you did not request this, please ignore this email and your password will remain unchanged.`,
  //           });
  //         })
  //         .then(() => res.end())
  //         .catch((err) => {
  //           console.log(err);
  //           return res.status(500).send({ general: 'something went wrong' });
  //         });
  //     });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(403).json({ error: err });
  //   });


  User.findOne({ email }, (err, user) => {
    if (err) { return res.status(403).json({ error: 'something went wrong' }); }
    if (!user) { return res.status(404).json({ email: 'user with this email is not found' }); }

    crypto.randomBytes(20, (err, buf) => {
      const token = buf.toString('hex');
      if (err) { return res.status(500).json({ error: 'something went wrong' }); }

      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 3600000;

      user.save((err) => {
        if (err) { return res.status(500).json({ error: 'something went wrong' }); }

        const auth = {
          auth: {
            api_key: 'key-00964dac06108f1f53f954a00b839f43',
            domain: 'sandbox13d1f30fde414d98ae20e2ef541f71eb.mailgun.org',
          },
        };

        const transporter = nodemailer.createTransport(mg(auth));

        transporter.sendMail({
          from: '"Cloverfield 👻" <vooxi@gmail.com>',
          to: user.email,
          subject: 'Password reset',
          text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.
                Please click on the following link, or paste this into your browser to complete the process: http://${req.headers.host}/reset/${token}
                If you did not request this, please ignore this email and your password will remain unchanged.`,
        }, (error, info) => {
          if (error) {
            console.log(error);
            return res.status(500).send({ general: 'you are using test settings for SMTP' });
          }
          console.log(info);
          res.end();
        });
      });
    });
  });
});

module.exports = router;
