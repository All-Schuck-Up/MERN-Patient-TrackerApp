const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PatientEntrySchema = new Schema({


 patientFullName:
     {
        firstName: {type: String,rquired: true },
        lastName: {type: String,rquired: true },
      },

 
  form: {
       date: {type: Date,rquired: true },
    symptom1:{type: Boolean },
    symptom2: {type: Boolean },
    symptom3: {type: Boolean },
             
    symptom4: {type: Boolean },

    additionalNote: {type: String,rquired: true },
     
    
   
    temperature: {type: String,rquired: true }
  },

   /*
      media: { 
          type: Buffer,
        
        
        unique: true
    },

  */
  
    doctorNote: {
        type: String
    },
    

   immediateAttention: {
        type: Boolean
    } 


});
const PatientEntry = mongoose.model('PatientEntry', PatientEntrySchema);
module.exports =PatientEntry;

 