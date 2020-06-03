const router = require('express').Router();
let PatientEntry = require('../../models/Patient');
const { check, validationResult } = require('express-validator');
//fiel Upload beg
let multer = require('multer');
//et uidv4 = require('uuid/v4');
const DIR = './public/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    limits : {fileSize : 1000000},
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "video/MP4" ||file.mimetype == "image/png" ||file.mimetype =="video/avi"|| file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});
//end
 router.route('/patientEntry/add/:id',upload.single('media')).put((req, res) => { //patient Id

    const formElement = {
        symptom1 :req.body.symptom1,
        symptom2 :req.body.symptom2,
        symptom3 :req.body.symptom3,
        symptom4:req.body.symptom4,
        temp : req.body.temp,
        comment : req.body.comment,
        doctorNote : req.body.doctorNote,
        immediateAttention : req.body.immediateAttention,
        media: url + '/public/' + req.file.filename
    
    };
    
        PatientEntry.findById(req.params.id)
    .then(patientEntries => {
        patientEntries.patientEntry.push(formElement)

        patientEntries.save()
            .then(() => res.json('Patient Entry Added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));

});


 
/* router.route('/patientEntry/add/:id',upload.single('media')).put((req, res) => { //patient Id
req.check('symptom1','Shouldbe Selected').notEmpty();
req.check('temp', 'Has to be a bumber').isNumeric();
req.session.errors=null;


let errors = req.validationErrors();
if (errors)
 {
    res.render('create-reservation.component',
        {
            title: 'Add Symptom',

            errors: errors
        });
} else 
 {

    const formElement = {
        symptom1 :req.body.symptom1,
        symptom2 :req.body.symptom2,
        symptom3 :req.body.symptom3,
        symptom4:req.body.symptom4,
        temp : req.body.temp,
        comment : req.body.comment,
        doctorNote : req.body.doctorNote,
        immediateAttention : req.body.immediateAttention,
        media: url + '/public/' + req.file.filename
    
    };
    PatientEntry.findById(req.params.id)
    .then(patientEntries => {
        patientEntries.patientEntry.push(formElement)

        patientEntries.save(function (err) {
            if (err)
             {
                console.log(err);
                return;
            }
            else 
            {
                req.flash('scuess', 'Table Reserved');
                res.redirect('/');
            }

        });
        

    })
  //  .catch(err => res.status(400).json('Error: ' + err));
 }
}); */

module.exports = router;
