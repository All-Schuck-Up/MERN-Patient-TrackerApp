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
    jwt.verify(token, config.get('jwtSecret'), (err, decoded) => {
      if (err) {
        return res.status(401).json({ msg: 'Token not valid' });
      } else {
        req.patient = decoded.patient;
        next();
      }
    });
  } catch (err) {
    console.error('Something went wrong with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
};
