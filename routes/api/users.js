const express = require('express');
const router = express.Router();
const gravatar = require('gravatar'); // https://en.gravatar.com/site/implement/xmlrpc/
const bcrypt = require('bcryptjs'); // https://www.npmjs.com/package/bcryptjs
const jwt = require('jsonwebtoken'); // https://github.com/auth0/node-jsonwebtoken, https://jwt.io/
const config = require('config'); // this is needed for jsonwebtoken, stored jwtSecret in /config/default.json
const { check, validationResult } = require('express-validator'); // https://express-validator.github.io/docs/

// Bring in User Model
const User = require('../../models/User');

// @route  POST api/users
// @desc   Register user
// @access Public
router.post('/', [
        check('name', 'Name is required.').not().isEmpty(),
        check('email', 'Please include valid email').isEmail(),
        check('password', 'Please enter password with legth 6 or more characters').isLength({ min: 6 })
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() }); // returns a list of errors via express-validator, if any
        }

        const { name, email, password } = req.body;

        try {
            let user = await User.findOne({ email });

            // See is user already exists
            if (user) {
                return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
            }

            // Get users gravatar
            const avatar = gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            })

            // Create new user
            user = new User({
                name,
                email,
                avatar,
                password
            });

            // Encrypt password via bcrypt
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            // save user to DB
            await user.save();

            // Return jsonwebtoken
            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 3600 }, (err, token) => {
                if (err) throw err;
                res.json({ token });
            }); // token expires in 1 hour

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }


    });

module.exports = router;