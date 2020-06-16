const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Connect MongoDB
connectDB();

// app level middleware
app.use(cors());
app.use(express.json());

// Routes (making app modular)
const patientEntryRoutes = require('./backend/routes/patient/patientEntry');
const immediateAttnRoutes = require('./backend/routes/provider/immediateAttention');
const alert = require('./backend/routes/provider/alert');

// middleware for all routes
app.use('/', patientEntryRoutes);
app.use('/', immediateAttnRoutes);
app.use('/', alert);
app.use('/patient/profile', require('./backend/routes/patient/patient'));
app.use('/users/user', require('./backend/routes/users/user'));
app.use('/users/auth', require('./backend/routes/users/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
