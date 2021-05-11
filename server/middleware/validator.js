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

console.log(validationResult(req).array())

      const error = new Error(validationError.msg);
      error.status = 400;

      next(error);
      console.log(error)
     
    }
  };

  return [
    check('username').notEmpty().withMessage('"Name" is required').isLength({ min: 3 }).withMessage('Name must be at least 3 characters').trim().escape(),
    check('email', 'Email is required').isEmail().normalizeEmail(),
   // check('password', 'Password is required').isLength({min:4}),
     check('password', 'Password is required').isLength({min:4}).custom((value, {req}) => {
     if(value !== req.body.confirmPassword) {
         throw new Error('Password is not matching')
     } else {
         return value;
     }
 }),

//-----------------all of them are working we can have them later but to test go with the stuff on top 

// check('password').trim().notEmpty().withMessage('Password required')
// .isLength({ min: 5 }).withMessage('password must be minimum 5 length')
// .matches(/(?=.*?[A-Z])/).withMessage('At least one Uppercase')
// .matches(/(?=.*?[a-z])/).withMessage('At least one Lowercase')
// .matches(/(?=.*?[0-9])/).withMessage('At least one Number')
// .matches(/(?=.*?[#?!@$%^&*-])/).withMessage('At least one special character')
// .not().matches(/^$|\s+/).withMessage('White space not allowed'),
// // confirm password validation
// check('confirmPassword').custom((value, { req }) => {
//      if (value !== req.body.password) {
//            throw new Error('Password Confirmation does not match password');
//       }
//       return value;
//  }),
    handler,
  ]
}

module.exports = {
  validateUser,
}
