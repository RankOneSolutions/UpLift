const express = require('express');
const app = express();
const path = require("path");
const { Pool } = require('pg');
import routes from './routes';

const pool = new Pool({
	          connectionString: process.env.DATABASE_URL,
	          ssl: true
});

// for routing our index.html
// __dirname always references where bundle.js is located
app.use(express.static(path.resolve(__dirname + '../../client')));
app.use('/', routes);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// const keys = require("./config/keys");
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// oAuth Shit

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: keys.googleClientID,
//       clientSecret: keys.googleClientSecret,
//       callbackURL: '/auth/google/callback'
//     }, (accessToken, refreshToken, profile, done) => {
//       // accessToken allows you to change things - expires
//       // refreshToken- can update the accessToken
//       console.log(accessToken);
//       console.log(refreshToken);
//       console.log(profile);
//     })
// );

// //original authenticate request
// app.get('/auth/google', passport.authenticate('google',
//   { scope: ['profile', 'email'] })
// );

// //incoming request with code coming back
// app.get('/auth/google/callback', passport.authenticate('google'));
