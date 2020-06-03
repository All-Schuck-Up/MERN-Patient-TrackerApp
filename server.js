const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors')
// var expressSession = require('express-session');
//var expressValidatore = require('express-validator');
const bodyParser = require('body-parser');
// var flash= require('req-flash');
const app = express();


// Connect MongoDB
connectDB();

// Bring in db schema
const patient = require('./models/Patient');
const provider = require('./models/Provider');
//const patientEntry = require('./models/PatientEntry');
//const patientEntry = require('./models/PatientSymptomEntry');

// app.use is a middleware function (middleware is carried out in sequence)


app.use(cors());
app.use(express.json());
//Error message


//  app.use(flash());

//   app.use(bodyParser.json());
//   app.use(bodyParser.urlencoded({
//       extended: false
//   }));

 
  //Express session Middleware
  // app.use(expressSession({
  //     secret: 'covid',
  //     resave: false,
  //     saveUninitialized: false,
      
  //   }))

    // app.use(require('connect-flash')());
    // app.use(function (req, res, next) {
    //   res.locals.messages = require('express-messages')(req, res);
    //   next();
    // });
    
    // app.use(expressValidator({
    //     errorFormatter: function(param, msg, value) {
    //       var namespace = param.split('.')
    //       , root    = namespace.shift()
    //       , formParam = root;
       
    //      while(namespace.length) {
    //       formParam += '[' + namespace.shift() + ']';
    //      }
    //      return {
    //       param : formParam,
    //       msg   : msg,
    //       value : value
    //      };
    //     }
    //    }));
   
  


// Routes (making app modular)
const mainRoutes = require('./routes');
const patientRoutes = require('./routes/patient/patient');
const patientEntryRoutes = require('./routes/patient/patientEntry2');
//const patientEntryRoutes = require('./routes/patient/PatientSymptomEntrys');
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
