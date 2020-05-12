const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect MongoDB
connectDB();

// app.use is a middleware function (middleware is carried out in sequence)
app.use(express.json({ extended: false }));

// Routes (making app modular)
app.use('/patient-api/patient', require('./routes/patient-api/patient'));
app.use('/patient-api/auth', require('./routes/patient-api/auth'));
app.use('/provider-api/provider', require('./routes/provider-api/provider'));
app.use('/provider-api/auth', require('./routes/provider-api/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
