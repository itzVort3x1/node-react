const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const path= require('path');
const cors = require('cors');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });


const app = express();

app.use(bodyParser.json());
app.use(cors());

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
require('./routes/billingRoutes')(app);
require('./routes/surveyRoute')(app);

if (process.env.NODE_ENV === 'production'){
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static(path.join(__dirname, 'client/build')));
    //Express will serve up the index.html file
    // if it dosen't find the Route
    
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    })
}


const PORT = process.env.PORT || 5000;
app.listen(PORT);