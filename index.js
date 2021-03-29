const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });


const app = express();

// this is valid syntax;
// here when we require the module it returns a function and then we immediatly call the function with the app argument!
require('./routes/authRoutes')(app);




const PORT = process.env.PORT || 5000;
app.listen(PORT);