const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });


const app = express();
// max age here gives the max time the cookie is valid, here it is valid for 30 days
// keys is  cookie key and is a random key.
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

// this is valid syntax;
// here when we require the module it returns a function and then we immediatly call the function with the app argument!
require('./routes/authRoutes')(app);




const PORT = process.env.PORT || 5000;
app.listen(PORT);