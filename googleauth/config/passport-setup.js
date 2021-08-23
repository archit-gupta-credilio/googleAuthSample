const passport = require ('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const user = require('../models/user-model');

passport.serializeUser((user, done) => {
    done(null, user.id);

})

passport.deserializeUser((id, done) => {
    user.findById(id).then((user) => {
        done(null, user.id);
    })
    done(null, user.id);

})

passport.use(new GoogleStrategy({
    //options for google startegy
    callbackURL: '/auth/google/redirect',
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    //passport callback function

    //check if user already exists in our database
    User.findOne({googleId: profile.id}).then((currentUser) => {
        if(currentUser) {
            //already exists
            console.log('user is',currentUser);
            done(null, currentUser);

        }else {
            //create new user
            new User({
                username: profile.displayName,
                googleId: profile.id,
                thumbnail: profile._json.image.url
            }).save().then((newUser) => {
                console.log('new user was saved' + newUser);
                done(null, newUser);
            })
        }
    })

    
})
)