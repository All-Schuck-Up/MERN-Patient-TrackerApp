const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = async function (req, res, next) {
  // retrieve token
  const token = req.header('x-auth-token');

  // if NO token
  if (!token) {
    return res.status(401).json({ msg: 'No token, Denied' });
  }

  // if token, then verify
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.provider = decoded.provider;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token not valid' });
  }
};
