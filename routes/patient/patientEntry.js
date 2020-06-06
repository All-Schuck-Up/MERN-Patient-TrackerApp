const router = require('express').Router();
let PatientEntry = require('../../models/Patient');

router.route('/patientEntries').get((req, res) => {
 
    PatientEntry.find()
        .then(patientEntries => res.json(patientEntries.patientEntry))
        .catch(err => res.status(400).json('Error: ' + err));
});

    let multer = require('multer');
    
     helpIdGenerator = () => {
    
      const uuidv4 = require('uuid/v4')
    
     } 
    const { v4: uuidv4 } = require('uuid');
    uuidv4();
    
    
 
   const DIR ='C:/workspace/patient-Tracking-Local/AD-410-F/public';

  //  const DIR = './public/';
    
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
        fileFilter: (req, file, cb) => {
            if (file.mimetype == "video/MP4" ||file.mimetype == "image/png" ||file.mimetype =="video/avi"|| file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
                cb(null, true);
            } else {
                cb(null, false);
                return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
            }
        }
    });


//router.route('/patientEntry/add/:id',upload.single('media')).put((req, res) => { //patient Id
 
router.put('/patientEntry/add/:id',upload.single('media'), (req, res,next) => { //patient Id
const url = req.protocol + '://' + req.get('host')
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

        patientEntries.save().then(result => {
            res.status(201).json({
                message: "User registered successfully!",
                userCreated: {
              //      _id: result._id,
                    profileImg: result.profileImg
                }
            })
        }).catch(err => {
            console.log(err),
                res.status(500).json({
                    error: err
                });
        })
        
    })
})
module.exports = router;