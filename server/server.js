const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
const keys = require("./config/keys");

// import path from 'path';

// import routes from './routes';

// for routing our index.html
// app.use(express.static(path.resolve(__dirname + '../../client')));

// connecting to our router

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
      // accessToken allows you to change things - expires
      // refreshToken- can update the accessToken
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
    })
);

//original authenticate request
app.get('/auth/google', passport.authenticate('google',
  { scope: ['profile', 'email'] })
);

//incoming request with code coming back
app.get('/auth/google/callback', passport.authenticate('google'));


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));