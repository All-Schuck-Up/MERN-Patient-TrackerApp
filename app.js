const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();

// To do: Connect MongoDB
connectDB();


// app.use is a middleware function (middleware is carried out in sequence)
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'pug');

// Routes (making app modular)
const routes = require('./routes');

// middleware for all routes
app.use(routes);

// Middleware (Testing middleware...)
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})

// Error handler (work in progress) (takes 4 params) (return ...)
app.use((err, req, res, next) => {
    res.locals.error = err;
    // const status = err.status || 500;
    res.status(err.status);
    // Render an error template (pass in template file and the err object)
    res.render('error');

})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});