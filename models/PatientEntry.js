const mongoose = require('mongoose');

const PatientEntrySchema = new mongoose.Schema({  //schema
    patientFullName: {
        type: String,
        required: true
    },
    form: {
        type: [{date: Date, symptom1: String, symptom2: String, symptom3: String, symptom4: String, additionalNote: String, media: String}],
        required: true,
       
    },
    doctorNote: {
        type: String
    },
    immediateAttention: {
        type: Boolean
    } 
});


async function createPatientEntry(){ //async function to create mock-up patient entries

    const patientEntry1 = new PatientEntry({
        patientFullName: "Alex Sandler",
        form: [{date: '2020-02-02', symptom1: 'no', symptom2: 'no', symptom3: 'no', symptom4: 'no', additionalNote: "None", media: "None"}],
        doctorNote: "please take care of yourself",
        immediateAttention: false
    })
    
    var result = await patientEntry1.save();
    console.log("patientEntry1 - " + result);

    const patientEntry2 = new PatientEntry({
        patientFullName: "Alex Sandler",
        form: [{date: '2020-02-05', symptom1: 'no', symptom2: 'no', symptom3: 'no', symptom4: 'no', additionalNote: "None", media: "None"}],
        doctorNote: "none",
        immediateAttention: false
    })
    result = await patientEntry2.save();
    console.log("patientEntry2 - " + result);

    const patientEntry3 = new PatientEntry({
        patientFullName: "Alex Sandler",
        form: [{date: '2020-02-08', symptom1: 'no', symptom2: 'yes', symptom3: 'no', symptom4: 'yes', additionalNote: "feeling a bit sick", media: "None"}],
        doctorNote: "let's schedule a virtual meeting to discuss your symptoms",
        immediateAttention: true
    })

    result = await patientEntry3.save();
    console.log("patientEntry3 - " + result);

    const patientEntry4 = new PatientEntry({
        patientFullName: "Balo Bear",
        form: [{date: '2020-05-05', symptom1: 'no', symptom2: 'no', symptom3: 'no', symptom4: 'no', additionalNote: "i am doing ok!", media: "None"}],
        doctorNote: "haven't checked yet",
        immediateAttention: false
    })

    result = await patientEntry4.save();
    console.log("patientEntry4 - " + result);

    const patientEntry5 = new PatientEntry({
        patientFullName: "Balo Bear",
        form: [{date: '2020-05-07', symptom1: 'no', symptom2: 'no', symptom3: 'no', symptom4: 'no', additionalNote: "i am fine", media: "None"}],
        doctorNote: "haven't checked yet",
        immediateAttention: false
    })

    result = await patientEntry5.save();
    console.log("patientEntry5 - " + result);

    const patientEntry6 = new PatientEntry({
        patientFullName: "Chet French",
        form: [{date: '2020-04-04', symptom1: 'no', symptom2: 'no', symptom3: 'no', symptom4: 'no', additionalNote: "nothing", media: "None"}],
        doctorNote: "good!",
        immediateAttention: false
    })

    result = await patientEntry6.save();
    console.log("patientEntry6 - " + result);

    const patientEntry7 = new PatientEntry({
        patientFullName: "Chet French",
        form: [{date: '2020-04-05', symptom1: 'no', symptom2: 'no', symptom3: 'no', symptom4: 'no', additionalNote: "nothing too", media: "None"}],
        doctorNote: "good!",
        immediateAttention: false
    })

    result = await patientEntry7.save();
    console.log("patientEntry7 - " + result);

    const patientEntry8 = new PatientEntry({
        patientFullName: "Dona Dolby",
        form: [{date: '2020-03-05', symptom1: 'yes', symptom2: 'yes', symptom3: 'yes', symptom4: 'no', additionalNote: "feeling very sick", media: "None"}],
        doctorNote: "will contact ASAP, stay hydrated meanwhile",
        immediateAttention: true
    })

    result = await patientEntry8.save();
    console.log("patientEntry8 - " + result);

    const patientEntry9 = new PatientEntry({
        patientFullName: "Dona Dolby",
        form: [{date: '2020-03-14', symptom1: 'no', symptom2: 'yes', symptom3: 'no', symptom4: 'no', additionalNote: "feeling much better, thank you doctor", media: "None"}],
        doctorNote: "happy to hear that",
        immediateAttention: false
    })

    result = await patientEntry9.save();
    console.log("patientEntry9 - " + result);

    const patientEntry10 = new PatientEntry({
        patientFullName: "Eve Pol",
        form: [{date: '2020-02-01', symptom1: 'no', symptom2: 'no', symptom3: 'no', symptom4: 'no', additionalNote: "hello", media: "None"}],
        doctorNote: "hello there",
        immediateAttention: false
    })

    result = await patientEntry10.save();
    console.log("patientEntry10 - " + result);

    const patientEntry11 = new PatientEntry({
        patientFullName: "Eve Pol",
        form: [{date: '2020-02-05', symptom1: 'no', symptom2: 'no', symptom3: 'no', symptom4: 'no', additionalNote: "nothing much", media: "None"}],
        doctorNote: "will check in soon",
        immediateAttention: false
    })

    result = await patientEntry11.save();
    console.log("patientEntry11 - " + result);
};

createPatientEntry(); //calling the async method

module.exports = PatientEntry = mongoose.model('patientEntry', PatientEntrySchema);
