const express = require('express');
const router = express.Router();

// Bring in data from data folder
const { patientData } = require('../../data/patient.json'); // patient credentials

router.get('/patient/login', (req, res) => { // TEST WITH: => http://localhost:3000/welcome
    //res.send('To do: render login page');
    res.render('patient-login');
});
router.post('/patient/login', (req, res) => {
    // read in user input ---> compare to mongoDB --> if(match) { start session for user } 
    // --> redirect to res.redirect('/') route
    storeUserInput(req.body, res);
    res.send(password);
    // if (patientData[email]) { // Check if email input matches database
    //     res.send('Login sucessful')
    // } else {
    //     res.status(400).json({ msg: 'Invalid Credentials' });
    // }

});

router.get('/patient/:_id', (req, res) => {
    res.send(' To do: Future Patient screener form ');
});
router.post('/patient/:_id', (req, res) => {
    // read in user input ---> assign to variables --> if(!err) { save to mongoDB(screen.Schema) } 
    // --> redirect to res.redirect('/welcome') route
});

module.exports = router;