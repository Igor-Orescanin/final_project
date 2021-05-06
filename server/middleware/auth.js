const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers['x-access-token'];

  try {
    const verified = jwt.verify(token, process.env.JWT_KEY);
    req.userData = verified;
    next();
  } catch (error) {
    return res.status(401).json({
      auth: false, message: 'Auth failed'
    });
  }
  
  

}
