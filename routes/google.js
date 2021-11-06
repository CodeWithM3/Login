import passport from 'passport';
import dotenv from 'dotenv';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';

dotenv.config();
try{
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/login/google/callback",
    passReqToCallback: true
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
}catch (error){
  res.status(400).json({error: error.message}); 

};
passport.serializeUser(function(user,done){
    done(null,user)
});

passport.deserializeUser(function(user,done){
    done(null, user)
});

export default GoogleStrategy;