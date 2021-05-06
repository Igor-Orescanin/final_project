const User = require("../models/User");

const createError = require("http-errors");
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.addUser = async (req, res, next) => {
  try {
    const users = await User.find({ email: req.body.email }).exec();

    if (users.length > 0) {
      // user already exists
      return res.json({
        message: "Mail exists"
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

    res.status(200).send(user);
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
    console.log(req.params.id);
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

//LOGIN USER IGUAL ARCHIVO: EXPRESS-LOGIN-STARTER-CODE
exports.loginUser = (req, res) => {

  //AUTENTICATION STARTS WHEN YOU LOOK THE EMAIL IN THE DB AND COMPARE THE PASSWORD
  User.find({ email: req.body.email })
    .exec()
    .then(response => {
      if (response.length < 1) {
        return res.status(401).json({
          auth: false, message: 'Auth failed'
        });
      }
      bcrypt.compare(req.body.password, response[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            auth: false, message: 'Auth failed'
          })
        }
        if (result) {
          //
          const token = jwt.sign(
            {
              email: response[0].email,
              userId: response[0]._id
            },
            process.env.JWT_KEY,
            {
              expiresIn: '1h'
            }
          );
          
          return res.json({auth: true, token: token})
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


