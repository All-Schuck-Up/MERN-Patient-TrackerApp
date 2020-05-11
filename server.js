const express = require('express');
const connectDB = require('./config/db');
const cors = require('express');

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
app.use(express.urlencoded({ extended: false }));

// Routes (making app modular)
const mainRoutes = require('./routes');
const patientRoutes = require('./routes/patient/patient');
const patinetAuthRoutes = require('./routes/patient/auth');
const providerRoutes = require('./routes/provider/provider');

// middleware for all routes
app.use(mainRoutes);
app.use(patientRoutes);
app.use(patinetAuthRoutes);
app.use(providerRoutes);

// Middleware (Testing middleware...)
// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
