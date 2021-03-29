const GogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const keys = require('../config/keys');

passport.use(new GogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    console.log('accesstoken', accessToken);
    console.log('refreshtoken', refreshToken);
    console.log('profile', profile);
})
);