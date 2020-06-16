const express = require('express');
const router = express.Router();

let ImmediateAttention = require('../../models/ImmediateAttention');

//get all the Unchecked immediate attention
router.route('/immediateAttentions').get((req, res) => {
  ImmediateAttention.find({ checked: false })
    .then((attn) => res.json(attn))
    .catch((err) => res.status(400).json('Error' + err));
});

router.route('/immediateAttention/add').post((req, res) => {
  const patientId = req.body.patientId;

  const newAttn = new ImmediateAttention({ patientId });

  newAttn
    .save()
    .then(() => console.log('Immediate Attention Request Added!'))
    .catch((err) => res.status(400).json('Error' + err));
});

//cheeck an immediate attention
router.route('/immediateAttention/checked/:id').put((req, res) => {
  ImmediateAttention.findById(req.params.id)
    .then((attn) => {
      attn.checked = true;
      attn
        .save()
        .then(() => res.json('Immadiate Attention Updated as Checked!'))
        .catch((err) =>
          res.status(400).json('Error: found but something wrong' + err)
        );
    })
    .catch((err) => res.status(400).json('Error: cannot find a profile' + err));
});

module.exports = router;
