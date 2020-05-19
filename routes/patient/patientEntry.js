const router = require('express').Router();
let PatientEntry = require('../../models/PatientEntry');
let Patient = require('../../models/Patient');

//route for getting an array of all patient entries
router.route('/patientEntries').get((req, res) => {
    PatientEntry
        .find()
        .then(patientEntries => res.json(patientEntries))
        .catch(err => res.status(400).json('Error: ' + err));
});

//route for getting all entries of 1st patient 
router.route('/patientEntry/').get((req, res) => {
    PatientEntry
        .findOne()
        .then(patientEntries => res.json(patientEntries))
        .catch(err => res.status(400).json('Error: ' + err));
});

//route for getting patient's all entries by id 
router.route('/patientEntries/:id').get((req, res) => {
    PatientEntry
        .findById(req.params.id)
        .then(patientEntries => res.json(patientEntries))
        .catch(err => res.status(400).json('Error: ' + err));
});

//patient entry adding route
router.route('/patientEntry/add').post((req, res) => {
    const patientFullName = req.body.patientFullName;
    const form = req.body.form;
    const doctorNote = req.body.doctorNote;
    const immediateAttention = req.body.immediateAttention;

    const newPatientEntry = new Order({ patientFullName, form, doctorNote, immediateAttention});

    newPatientEntry.save()
        .then(() => res.json('Patient Entry Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update route for the patient to add a note to their entry entered in last 24 hours
router.route('/patientEntry/update/:id').post((req, res) => {
    PatientEntry.findById(req.params.id)
        .then(entry => {
            entry.form[5] = req.body.updatedAdditionalNote;
            entry.save()
                .then(() => res.json('Patient Entry Note Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;