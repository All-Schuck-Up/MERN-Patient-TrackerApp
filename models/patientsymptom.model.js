const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const patientsymptomSchema = new Schema({

    patientFullName: {
        type: String,
        //required: true,
        
       // unique: true
    },
    date: {
        type:Date,
        //required: true,
        
       // unique: true
    },
    symptom1: {
        type: String,
        //required: true,
        
       // unique: true
    },
    symptom2: {
        type: String,
        //required: true,
        
       // unique: true
    },
    symptom3: {
        type: String,
        //required: true,
        
       // unique: true
    },
    symptom4: {
        type: String,
      //  required: true,
        
       // unique: true
    },
    additionalNote: {
        type: String,
       // required: true,
        
        //unique: true
    },
    temperature: {
        type: Number,
        //required: true,
        
        //unique: true
    },
     /*
      media: { 
          type: Buffer,
        
        
        unique: true
    },
   
  
    doctorNote: {
        type: String
    },
    */
   immediateAttention: {
        type: Boolean
    } 
});

const Patientsymptom = mongoose.model('Patientsymptom', patientsymptomSchema);
module.exports =Patientsymptom;
 