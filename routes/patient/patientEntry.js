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
    
    
   
   const DIR = './public/';
    
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, DIR);
        },
        filename: (req, file, cb) => {
            const fileName = file.originalname.toLowerCase().split(' ').join('-');
         //   cb(null, uuidv4() + '-' + fileName)
         cb(null, Date.now() + '-' +file.originalname )
        }
    });
    
    var upload = multer({
        storage: storage,
        limits : {fileSize : 524288000},
        fileFilter: (req, file, cb) => {
           if (file.mimetype == "video/mp4" ||file.mimetype == "image/png" ||file.mimetype =="video/avi"|| file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
                cb(null, true);
            } else {
                cb(null, false);
                return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
            }
        }
    });

router.put('/patientEntry/add/:id',upload.single('media'), (req, res,next) => { //patient Id
const url = req.protocol + '://' + req.get('host')
    const formElement = {
        symptom1 :req.body.symptom1,
        symptom2 :req.body.symptom2,
        symptom3 :req.body.symptom3,
        symptom4:req.body.symptom4,
        temp : Number((req.body.temp)),
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
                message: "Symptom Upload  successfully!",
                
               
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