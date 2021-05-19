//VALIDATE DATA FOR USER SCHEMA
const { check, validationResult } = require('express-validator');

function validateUser() {
  const handler = (req, res, next) => {
    try {
      validationResult(req).throw(); // .thorw if has an error fail

      next(); // if not, continue to next middleware
    } catch (err) {

      const validationError = validationResult(req).array();

      console.log(JSON.stringify(validationError, undefined, 4));
      res.json({error:validationError})


      //console.log(validationResult(req).array())

      // const error = new Error(validationError.msg);
      // error.status = 400;

      next(error);
      //console.log(error)

    }
  };

  return [
    check('username').notEmpty().withMessage('"Name" is required').isLength({ min: 3 }).withMessage('Name must be at least 3 characters').trim().escape(),
    check('email', 'Email is required').isEmail().normalizeEmail(),
    check('password', 'Password is required').isLength({ min: 6 }).custom((val, { req }) => {
      if (req.body.password !== req.body.confirmPassword) {
        throw new Error(`Password don't match!`);
      } else {
        return val;
      }
    }),

    handler,
  ]
}

module.exports = {
  validateUser,
}
