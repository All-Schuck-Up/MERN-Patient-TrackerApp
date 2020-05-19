const router = require('express').Router();
let Symptom = require('../../models/patientsymptom.model');

router.route('/').get((req, res) => {
    Symptom.findById(req.params.id)
        .then(patientsymptoms => res.json(patientsymptoms))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
 //   router.route('/patientsymptoms/add').post((req, res) => {
        const patientFullName = (req.body.patientFullName);
        const date =Date.parse(req.body.date);
       //const data = Date.parse(req.body.date);
        const symptom1 = (req.body.symptom1);
        const symptom2 = (req.body.symptom2);
        const symptom3 = (req.body.symptom3);
        const symptom4 = (req.body.symptom4);
      
        const additionalNote = (req.body.additionalNote);
        
        const temperature = (req.body.temperature);
        //const media = (req.body.media);
        const immediateAttention = (req.body.immediateAttention);
        
        const newSymptom = new Symptom({
            patientFullName,
            date,
            symptom1,
            symptom2,
            symptom3,
            symptom4,
            additionalNote,
            temperature,
         // media,
            immediateAttention,
        });
        newSymptom.save()
            .then(() => res.json('SYmptom saved!'))
            .catch(err => res.status(400).json('Error: ' + err));
    });
   
    router.route('/:id').get((req, res) => {
        Symptom.findById(req.params.id)
           .then(patientsymptom=> res.json(patientsymptom))
          .catch(err => res.status(400).json('Error: ' + err));
      });

//update route for the patient to add a note to their entry entered in last 24 hours
/*
router.route('/patientsymptoms/update/:id').post((req, res) => {
    Symptom.findById(req.params.id)
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