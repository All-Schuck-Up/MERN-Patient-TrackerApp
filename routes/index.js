const express = require('express');
const router = express.Router();

// Bring in data from data folder
const { patientData } = require('../data/patient.json'); // patient credentials
const { providerData } = require('../data/provider.json'); // provider credentials

router.get('/', (req, res) => {
    res.send('To do: Main page')
        // if(onLogIn) { res.render('mainPage) of {user} }
        // else { res.redirect('landingPage') }
});

router.get('/welcome', (req, res, ) => { // TEST WITH => http://localhost:3000/landing
    // res.send('To do: Welcome Page (button to redirect to a register page and button to login page');
    // if(onClick: register) { res.redirect('/register') }
    // if(onClick: login) { res.redirect('/login') }
    // else { res.send(err) }
    res.render('welcome');
});

function storeUserInput(params, res) {
    var email = params.email;
    var password = params.password;
};

module.exports = router;