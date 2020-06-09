const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Connect MongoDB
connectDB();

// app.use is a middleware function (middleware is carried out in sequence)
app.use(cors());
app.use(express.json());

// Routes (making app modular)
const mainRoutes = require('./backend/routes');
const patientRoutes = require('./backend/routes/patient/patient');
const patientEntryRoutes = require('./backend/routes/patient/patientEntry');
//const patientEntryRoutes = require('./routes/patient/PatientSymptomEntrys');
const providerRoutes = require('./backend/routes/provider/provider');
const immediateAttnRoutes = require('./backend/routes/provider/immediateAttention');
const alert = require('./backend/routes/provider/alert');

// middleware for all routes
app.use('/', mainRoutes);
app.use('/', patientRoutes);
app.use('/', patientEntryRoutes);
app.use('/', providerRoutes);
app.use('/', immediateAttnRoutes);
app.use('/', alert);
app.use('/users/user', require('./backend/routes/users/user'));
app.use('/users/auth', require('./backend/routes/users/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
