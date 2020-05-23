const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PatientEntrySchema = new Schema({
 patientFullName: {type: String,rquired: true },
form: {
       date: {type: Date,rquired: true },
    symptom1:{type: Boolean,rquired: true },
    symptom2: {type: Boolean,rquired: true },
    symptom3: {type: Boolean,rquired: true },
    symptom4: {type: Boolean,rquired: true },
    additionalNote: {type: String,rquired: true },
    temperature: {type: String,rquired: true }
  },
    media: { 
          type: Buffer,
          unique: true
    },
    doctorNote: {
        type: String
    },
  
   immediateAttention: {
        type: Boolean
    } ,
   
   /* PatientID:{
      type:String,
<<<<<<< Updated upstream
      ref:PatientSchema,
      required
=======
      required: true 
>>>>>>> Stashed changes
    } */
});
const PatientEntry = mongoose.model('PatientEntry', PatientEntrySchema);
module.exports =PatientEntry;

 