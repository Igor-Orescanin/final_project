const User = require("../models/User");

const createError = require("http-errors");
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
require('dotenv').config();
const _ = require('lodash');
const nodemailer = require('nodemailer');


exports.addUser = async (req, res, next) => {
  try {
    const users = await User.find({ email: req.body.email }).exec();

    if (users.length > 0) {
      // user already exists
      return res.json({
        msg:"Mail exists",
        auth: false,
      });
    }

    const plainPassword = req.body.password;
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });

    await user.save();
    res.json({ msg: "Thanks for registering", user: user })
  } catch (e) {
    next(e);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (e) {
    next(e);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) throw new createError.NotFound();
    res.status(200).send(user);
  } catch (e) {
    next(e);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
   // console.log(req.params.id);
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false
    });
    if (!user) throw new createError.NotFound();
    res.status(200).send(user);
  } catch (e) {
    next(e);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) throw new createError.NotFound();
    res.status(200).send(user);
  } catch (e) {
    next(e);
  }
};

//LOGIN USER
exports.loginUser = (req, res) => {

  //AUTENTICATION STARTS WHEN YOU LOOK THE EMAIL IN THE DB AND COMPARE THE PASSWORD
  User.find({ email: req.body.email })
    .exec()
    .then(response => {
      if (response.length < 1) {
        return res.json({
          auth: false, message: 'Auth failed'
        });
      }
      bcrypt.compare(req.body.password, response[0].password, (err, result) => {
        if (err) {
          return res.json({
            auth: false, message: 'Auth failed'
          })
        }
        if (result) {
          //
          const token = jwt.sign(
            {
              email: response[0].email,
              userId: response[0]._id,
            },
            process.env.JWT_KEY,
            {
              expiresIn: '2h'
            }
          );

          return res.json({ auth: true, token: token, username: response[0].username, _id: response[0]._id })
        }
        return res.json({
          auth: false, message: 'Auth failed'
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.json({
        error: err
      });
    });
}


// FORGOT PASSWORD ENDPOINT
exports.forgotPassword = (req, res) => {

  const { email } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({ error: "Email does not exist" })
    }


    const token = jwt.sign({ _id: user._id }, process.env.RESET_PASSWORD_KEY, { expiresIn: '20m' });

    const data = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Reset password link',
      html: `
            <h2>Please click on given link to reset your password</h2>
            <p>${process.env.CLIENT_URL}/resetpassword/${token}</p>
          `
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    })


    return user.updateOne({ resetLink: token }, function (err, success) {
      if (err) {
        return res.status(400).json({ error: "reset password link error" });
      } else {
        transporter.sendMail(data, (error, info) => {
          if (error) {
            console.log(error);
            return res.json({ error: err.message })
            // callback(false);
          }
          return res.json({ message: "Email has been sent, follow the instructions" });
          // callback(true);
        })
      }
    })

  })
}



exports.resetPassword = (req, res) => {
  const { resetLink, newPass } = req.body;
  if (resetLink) {
    jwt.verify(resetLink, process.env.RESET_PASSWORD_KEY, function (error, decodedData) {
      if (error) {
        return res.status(401).json({ error: "Incorrect token or it is expired" })
      }
      User.findOne({ resetLink }, (err, user) => {
        if (err || !user) {
          return res.status(400).json({ error: "User with this token does not exist" })
        }

        const obj = {
          password: newPass
        }

        user = _.extend(user, obj);

        user.save((err, result) => {
          if (err) {
            return res.status(400).json({ error: "reset password error" });
          } else {
            return res.status(200).json({ message: "Your password has been changed" })
          }
        })

      })
    })
  } else {
    return res.status(401).json({ error: "Authentication error" })
  }
}


