const express = require('express')
const app = express();
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const db = require('./db/db');
const passport = require('passport');

const cookieSession = require('cookie-session');

//setup view engine
app.set('view engine','ejs');

app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys:[keys.session.cookieKey],
}));

//initaiaze passport
app.use(passport.initialize());
app.use(passport.session());

//setup routes
app.use('/auth',authRoutes);

app.use('/profile',profileRoutes);


//create home route (show page on website)
app.get('/', (req,res)=>{
    res.render('home', {user: req.user});
});

//llisten to a port
app.listen(3000, ()=>{
    console.log('app now listen for request on post 3000');
});
