const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Provider = require('../../models/Provider');

router.get('/provider/login', (req, res) => { // TEST WITH: => http://localhost:3000/landing
    //res.send('To do: render login page');
    res.render('provider-login');
});
router.post('/provider/login', (req, res) => {
    // read in user input ---> compare to mongoDB --> if(match) { start session for user } 
    // --> redirect to res.redirect('/') route
});

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
  
        // TO DO: --Possible password encryption
  
        await provider.save();
        res.send('Provider added');
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    });

module.exports = router;