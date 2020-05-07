const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const Provider = require('../../models/Provider');

router.get('/provider/login', (req, res) => { 
});
// POST request: This route takes in user login input and compares it to database in order to login user. TEST WITH: => postman post to http://localhost:5000/provider/login
router.post('/provider/login', [
    check('email', 'Enter a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let provider = await Provider.findOne({ email });

      if (!provider) {
        res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(req.body.password, provider.password);

      if(!isMatch) {
          res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const payload = {
          provider: {
              id: provider.id
          }
      }
      res.status(400).send('Logged in');

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// POST request, Add prover to database unless already exists.  TEST WITH: => POSTMAN POST to http://localhost:5000/provider/
router.post('/provider/', [
      check('name', 'Name is required').not().isEmpty(),
      check('email', 'Enter a valid email').isEmail(),
      check('password', 'Please enter password with atleast 4 characters').isLength({ min: 4 }),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { name, email, password } = req.body;
  
      try {
        let provider = await Provider.findOne({ email });
  
        if (provider) {
          res.status(400).json({ errors: [{ msg: 'Provider alread in system' }] });
        }
  
        provider = new Provider({
          name,
          email,
          password,
        });
  
       // encrypt password
      provider.password = await bcrypt.hash(req.body.password, 10);
      console.log(provider.password);
      // End encryption
  
        await provider.save();
        res.send('Provider added');
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    });

module.exports = router;