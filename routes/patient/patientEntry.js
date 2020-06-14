const router = require("express").Router();
let PatientEntry = require("../../models/Patient");

router.route("/patientEntries").get((req, res) => {
  PatientEntry.find()
    .then((patientEntries) => res.json(patientEntries.patientEntry))
    .catch((err) => res.status(400).json("Error: " + err));
});

//route for getting entries by patient Id
router.route("/patientEntry/:id").get((req, res) => {
  PatientEntry.find({ patientId: req.params.id })
    .then((patientEntries) => res.json(patientEntries))
    .catch((err) => res.status(400).json("Error: " + err));
});

//route for getting all entries of 1st patient
router.route("/patientEntry/").get((req, res) => {
  PatientEntry.findOne()
    .then((patientEntries) => res.json(patientEntries))
    .catch((err) => res.status(400).json("Error: " + err));
});

//File Upload Using muter
let multer = require("multer");

helpIdGenerator = () => {
  const uuidv4 = require("uuid/v4");
};
const { v4: uuidv4 } = require("uuid");
uuidv4();

const DIR = "./public/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    //   cb(null, uuidv4() + '-' + fileName)
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({
  storage: storage,
 

});
//route to put patient symptom
router.put(
  "/patientEntry/add/:id",
  upload.single("media"),
  (req, res, next) => {
    //patient Id
    const url = req.protocol + "://" + req.get("host");
    const formElement = {
      symptom1: req.body.symptom1,
      symptom2: req.body.symptom2,
      symptom3: req.body.symptom3,
      symptom4: req.body.symptom4,
      temp: Number(req.body.temp),
      comment: req.body.comment,
      doctorNote: req.body.doctorNote,
      immediateAttention: req.body.immediateAttention,
      media: url + "/public/" + req.file.filename,
    };
    PatientEntry.findById(req.params.id)
      .then((patientEntries) => {
        patientEntries.patientEntry.push(formElement);
        patientEntries
          .save()
          .then(() => res.json("Patient Entry Added!"))
          .catch((err) => res.status(400).json("Error: " + err));
      })
      .catch((err) => res.status(400).json("Error: " + err));

  
}
);
//update patient update note by index
router.route('/patientEntry/update/:id').put((req, res) => {
    
    //const dialogInput = {updateNote : req.body.updateNote};
    PatientEntry.findById(req.params.id)
    //PatientEntry.find({"date": req.params.date})
        .then(entry => {
            entry.patientEntry[entry.patientEntry.length-1].updateNote = req.body.updateNote;
                   entry.save()
                .then(() => res.json('Patient Entry Note Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
