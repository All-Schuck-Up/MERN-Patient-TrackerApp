const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('To do: Main page')
        // if(onLogIn) { res.render('mainPage) of {user} }
        // else { res.redirect('landingPage') }
});

router.get('/landing', (req, res, ) => { // TEST WITH => http://localhost:3000/landing
    // res.send('To do: Welcome Page (button to redirect to a register page and button to login page');
    // if(onClick: register) { res.redirect('/register') }
    // if(onClick: login) { res.redirect('/login') }
    // else { res.send(err) }
    res.render('landing');
});

router.get('/register', (req, res) => {
    res.send('To do: Register Page w/ form for user creation');
    // This route will render the page with form content
});
router.post('/register', (req, res) => {
    // read in user input ---> assign to variables --> if(!exisist) { save to mongoDB(user.Schema) } 
    // --> redirect to res.redirect('/landing') route
});

router.get('/patient-login', (req, res) => { // TEST WITH: => http://localhost:3000/landing
    //res.send('To do: render login page');
    res.render('patient-login');
});
router.post('/patient-login', (req, res) => {
    // read in user input ---> compare to mongoDB --> if(match) { start session for user } 
    // --> redirect to res.redirect('/') route
});

router.get('/provider-login', (req, res) => { // TEST WITH: => http://localhost:3000/landing
    //res.send('To do: render login page');
    res.render('provider-login');
});
router.post('/provider-login', (req, res) => {
    // read in user input ---> compare to mongoDB --> if(match) { start session for user } 
    // --> redirect to res.redirect('/') route
});

router.get('/screen', (req, res) => {
    res.send('To do: Route to render paitent screener form');
    // res.render('screener')
});
router.post('/screen', (req, res) => {
    // read in user input ---> assign to variables --> if(!err) { save to mongoDB(screen.Schema) } 
    // --> redirect to res.redirect('/landing') route
});

module.exports = router;