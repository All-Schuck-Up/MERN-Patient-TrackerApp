const mongoose = require('mongoose');

const ProviderSchema = new mongoose.Schema({ //providers schema
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

async function createProvider(){  ////async function to create mock-up providers

    const provider1 = new Provider({
        name: "Prov",
        email: "prov@email.com",
        password: "provPassword"
    })
    
    var result = await provider1.save();
    console.log("provider1 - " + result);

    const provider2 = new Provider({
        name: "Doctor",
        email: "doctor@email.com",
        password: "doctorPassword"
    })
    result = await provider2.save();
    console.log("provider2 - " + result);

    const provider3 = new Provider({
        name: "Nurse",
        email: "nurse@email.com",
        password: "nursePassword"
    })

    result = await provider3.save();
    console.log("provider3 - " + result);

};

createProvider();

module.exports = Provider = mongoose.model('provider', ProviderSchema);
