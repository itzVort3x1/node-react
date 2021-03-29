const express = require('express');
require('./services/passport');


const app = express();

// this is valid syntax;
// here when we require the module it returns a function and then we immediatly call the function with the app argument!
require('./routes/authRoutes')(app);




const PORT = process.env.PORT || 5000;
app.listen(PORT);