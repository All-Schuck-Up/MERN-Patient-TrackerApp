const router = require('express').Router();
let PatientEntry = require('../../models/PatientEntry');


router.route('/patientEntries').get((req, res) => {
 
    PatientEntry.find()
        .then(patientEntries => res.json(patientEntries))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('patientEntry/add').post((req, res) => {
    const newSymptom = new PatientEntry({
      
        patientFullName:
        {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        },
        patientId:req.body.patientId,
        form:
        {
            date : Date.parse(req.body.date),
            symptom1 :req.body.symptom1,
            symptom2 :req.body.symptom2,
            symptom3 :req.body.symptom3,
            symptom4:req.body.symptom4,

            additionalNote : req.body.additionalNote,
            temperature :req.body.temperature,
   // media = (req.body.media)
           
        },
        immediateAttention :req.body.immediateAttention
    });
    newSymptom.save()
        .then(() => res.json('Patient Symptom saved!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/patientEntry/:id').get((req, res) => {
    PatientEntry.findById(req.params.id)
        .then(patientEntry => res.json(patientEntry))
        .catch(err => res.status(400).json('Error: ' + err));
});


//update route for the patient to add a note to their entry entered in last 24 hours
/*
router.route('/PatientEntry/update/:id').post((req, res) => {
    PatientEntry.findById(req.params.id)
        .then(patientsymptom => {
            patientsymptom.additionalNote = req.body.additionalNote;

            patientsymptom.save()
                .then(() => res.json('Patient Entry Node  updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});
*/
module.exports = router;