const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Connect MongoDB
connectDB();

// Bring in db schema
const patient = require('./models/Patient');
const provider = require('./models/Provider');
const patientEntry = require('./models/PatientEntry');

// app.use is a middleware function (middleware is carried out in sequence)
app.use(cors());
app.use(express.json());

// Routes (making app modular)
const mainRoutes = require('./routes');
const patientEntryRoutes = require('./routes/patients/patientEntry');
const providerRoutes = require('./routes/provider/provider');
const immediateAttnRoutes = require('./routes/provider/immediateAttention');

// middleware for all routes
app.use('/', mainRoutes);
app.use('/patients/profile', require('./routes/patients/profile'));
app.use('/', patientEntryRoutes);
app.use('/', providerRoutes);
app.use('/', immediateAttnRoutes);
app.use('/users/user', require('./routes/users/user'));
app.use('/users/auth', require('./routes/users/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
