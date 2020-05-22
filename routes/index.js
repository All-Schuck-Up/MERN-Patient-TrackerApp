const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('To do: Main page')
        // if(onLogIn) { res.render('mainPage) of {user} }
        // else { res.redirect('landingPage') }
});

router.get('/welcome', (req, res, ) => { // TEST WITH => http://localhost:5000/welcome
    // res.send('To do: Welcome Page (button to redirect to a register page and button to login page');
    // if(onClick: register) { res.redirect('/register') }
    // if(onClick: login) { res.redirect('/login') }
    // else { res.send(err) }
    res.render('welcome');
});

module.exports = router;