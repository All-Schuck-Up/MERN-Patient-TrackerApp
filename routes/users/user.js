const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const Patient = require('../../models/Patient');

// route    POST /user   TEST: https://localhost:5000/users/user
// desc     Register user/ throw err if user exsits
// return   onSuccess: Token    onFail: err message
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
    check('accountType', 'Patient or Provider').isIn(['patient', 'provider']),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, accountType } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        name,
        accountType,
        email,
        password,
      });

      // encrypt password
      user.password = await bcrypt.hash(req.body.password, 10); //10 is default salt per doccumentation

      await user.save();

      const payload = {
        user: {
          id: user.id,
          email: user.email,
          accountType: user.accountType,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 3600 }, // This should be 1 hr
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
