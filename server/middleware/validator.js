//VALIDATE DATA FOR USER SCHEMA
const { check, validationResult } = require('express-validator');

function validateUser() {
  const handler = (req, res, next) => {
    try {
      validationResult(req).throw(); // .thorw if has an error fail

      next(); // if not, continue to next middleware
    } catch (err) {
      const validationError = validationResult(req).array().pop();

      // console.log(JSON.stringify(validationError, undefined, 4));

      const error = new Error(validationError.msg);
      error.status = 400;

      next(error);
    }
  };

  return [   //los nombre name, lastName viene del html porque viene del http request validando lo que viene del body
    check('name').notEmpty().withMessage('"Name" is required').isLength({ min: 3 }).withMessage('Name must be at least 3 characters').trim().escape(),
    check('lastname').notEmpty().withMessage('"Lastname" is required').isLength({ min: 3 }).withMessage('Lastname must be at least 3 characters').trim().escape(),
    check('username').notEmpty().withMessage('"Username" is required').isLength({ min: 3 }).withMessage('Username must be at least 3 characters').trim().escape(),
    check('email', 'Email is required').isEmail().normalizeEmail(),
    check('password', 'Password is required').isLength({ min: 4 }),
    handler,
  ]
}

module.exports = {
  validateUser,
}
