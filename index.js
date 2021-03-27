const express = require('express');
const passport = require('passport');
const GogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// passport.use(new GogleStrategy());

app.get('/', (req, res) => {
    res.send({ hi: 'there' })
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);