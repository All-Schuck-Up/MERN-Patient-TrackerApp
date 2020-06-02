const mongoose = require('mongoose');

const ProviderSchema = new mongoose.Schema({
  //providers schema
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});


module.exports = Provider = mongoose.model('provider', ProviderSchema);
