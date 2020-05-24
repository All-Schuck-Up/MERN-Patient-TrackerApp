const router = require('express').Router();
let PatientSymptomEntry = require('../../models/PatientSymptomEntry');

router.route('/PatientSymptomEntrys').get((req, res) => {

  
    PatientSymptomEntry.find(req.params.id)
        .then(PatientSymptomEntrys => res.json(PatientSymptomEntrys))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/PatientSymptomEntry/add').post((req, res) => {



    const newSymptom = new PatientSymptomEntry({
        patientFullName:req.body.patientFullName,
       
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

router.route('PatientSymptomEntry/:id').get((req, res) => {
    PatientSymptomEntry.findById(req.params.id)
        .then(PatientSymptomEntry => res.json(PatientSymptomEntry))
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