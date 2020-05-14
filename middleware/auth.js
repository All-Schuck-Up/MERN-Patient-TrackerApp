const jwt = require('jsonwebtoken');
const config = require('config');

// Route    middleware for auth
// desc     looks for token verify and decodes
// return   onSuccess: decoded user onFail: err message
module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // If (no token)
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // (token exsits) -> verify
  try {
    jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: 'Token is not valid' });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error('error with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
};
