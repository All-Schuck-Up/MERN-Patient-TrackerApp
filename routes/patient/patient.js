const express = require('express');
const router = express.Router();
const Patient = require('../../models/Patient');

router.get('/patient/login', (req, res) => { // TEST WITH: => http://localhost:3000/welcome
    //res.send('To do: render login page');
    res.render('patient-login');
});
router.post('/patient/login', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    Patient.findOne({ email: email, password: password }, function(err, patient) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        if (!patient) {
            return res.status(404).send();
        } else {
            return res.status(200).send();
        }
    })
});

router.get('/patient/:_id', (req, res) => {
    res.send(' To do: Future Patient screener form ');
});
router.post('/patient/:_id', (req, res) => {
    // read in user input ---> assign to variables --> if(!err) { save to mongoDB(screen.Schema) } 
    // --> redirect to res.redirect('/welcome') route
});

router.post('/patient/register', (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    var newPatient = new Patient();
    newPatient.name = name;
    newPatient.email = email;
    newPatient.password = password;
    newPatient.save(function(err, savedPatient) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        return res.status(200).send();
    })
});

router.get('/patient/logout', (req, res) => {
    req.logout();
    res.redirect('/welcome');
});

module.exports = router;