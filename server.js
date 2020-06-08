const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors')
var expressSession = require('express-session');
var expressValidatore = require('express-validator');
const bodyParser = require('body-parser');
// var flash= require('req-flash');
const app = express();


// Connect MongoDB
connectDB();

// Bring in db schema
const patient = require('./models/Patient');
const provider = require('./models/Provider');


//  app.use(flash());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

app.use('/public', express.static('public'));

// Routes (making app modular)
const mainRoutes = require('./routes');
const patientRoutes = require('./routes/patient/patient');
const patientEntryRoutes = require('./routes/patient/patientEntry');

const providerRoutes = require('./routes/provider/provider');

// middleware for all routes
app.use('/', mainRoutes);
app.use('/', patientRoutes);
app.use('/', patientEntryRoutes);
app.use('/', providerRoutes);
app.use('/users/user', require('./routes/users/user'));
app.use('/users/auth', require('./routes/users/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
