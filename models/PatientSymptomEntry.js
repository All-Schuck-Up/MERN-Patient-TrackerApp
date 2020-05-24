const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientEntrySchema = new Schema({

   /* patientFullName:
     {
        firstName: {type: String,rquired: true },
        lastName: {type: String,rquired: true },
      },*/
      patientFullName:
       {type: String,rquired: true },
       
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
    } 
});


const PatientSymptomEntry = mongoose.model('PatientSymptomEntry', PatientEntrySchema);
module.exports =PatientSymptomEntry;

 