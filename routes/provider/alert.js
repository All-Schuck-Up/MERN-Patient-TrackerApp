const express = require('express');
const router = express.Router();

let Alert = require('../../models/Alert')

//get all the Unchecked immediate attention 
router.route('/alerts').get((req, res) => {
    Alert.find({'checked' : false})
        .then(attn => res.json(attn))
        .catch(err => res.status(400).json("Error" + err));
});

router.route('/alert/add').post((req, res) => {
    const patientID = req.body.patientID;
    const alertMessage = req.body.alertMessage;
    const newAlert = new Alert({patientID, alertMessage});

    newAlert.save()
        .then(res => res.json('Alert Request Added!'))
        .catch(err => res.status(400).json("Error" + err));
});

//cheeck an immediate attention
router.route('/alert/checked/:id').put((req, res) => {
    Alert.findById(req.params.id)
        .then(alert => {
            alert.checked = true;
            alert.save()
                .then(() => res.json('Alert Updated as Checked!'))
                .catch(err => res.status(400).json('Error: found but something wrong' + err));
        })
        .catch(err => res.status(400).json('Error: cannot find a profile' + err));
});

module.exports = router;