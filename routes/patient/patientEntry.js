const router = require('express').Router();
let PatientEntry = require('../../models/Patient');


//route for getting an array of all patient entries
router.route('/patientEntries').get((req, res) => {
    PatientEntry
        .find()
        .then(patientEntries => res.json(patientEntries))
        .catch(err => res.status(400).json('Error: ' + err));
});

//route for getting patient's all entries by 1 entryid 
router.route('/patientEntries/:id').get((req, res) => {
    PatientEntry
        .findById(req.params.id)
        .then(patientEntries => res.json(patientEntries))
        .catch(err => res.status(400).json('Error: ' + err));
});

//route for getting entries by patient Id
router.route('/patientEntry/:id').get((req, res) => {
    PatientEntry
        .find({"patientId": req.params.id})
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



//patient entry adding route

router.route('/patientEntry/add/:id').put((req, res) => { //patient Id

    const formElement = {
        symptom1 :req.body.symptom1,
        symptom2 :req.body.symptom2,
        symptom3 :req.body.symptom3,
        symptom4:req.body.symptom4,
        temp : req.body.temp,
        comment : req.body.comment,
        updateNote : req.body.updateNote,
        immediateAttention : req.body.immediateAttention};
    PatientEntry.findById(req.params.id)
    .then(patientEntries => {
        patientEntries.patientEntry.push(formElement)

        patientEntries.save()
            .then(() => res.json('Patient Entry Added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
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

//adds to the doctor note array in the patient cluster
router.route('/patientEntry/addDoctorNote/:id').put((req, res) => {
    PatientEntry.findById(req.params.id)
        .then(entry => {
            if(req.body.isDoctor) {
            entry.doctorNote.push(req.body.doctorNote);
            entry.save()
                .then(() => res.json('Doctor Note Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));}
            else {
                res.json("Only providers are allowed to update doctor notes")
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//retrieves all the doctor notes
router.route('/doctorNotes/:id').get((req, res) => {
    PatientEntry
        .findById(req.params.id)
        .then(patient => res.json(patient.doctorNote))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/patientEntry/addUpdateNote/:id').put((req, res) => {
    PatientEntry.findById(req.params.id)
        .then(entry => {
            entry.patientEntry[entry.patientEntry.length - 1].updateNote = req.body.updateNote;
            entry.save()
                .then(() => res.json('Doctor Note Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));}
            
        )
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
