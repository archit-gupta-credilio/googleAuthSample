//create an instance of route
const router = require('express').Router();
const passport = require('passport');

//auth login
router.get('/login', (req,res) => {
    res.render('login', {user: req.user});
});

//auth with google
router.get('/google',passport.authenticate('google',{
    scope: ['profile', ]
}));

// calling route for google to redirect back
router.get('/google/redirect', passport.authenticate('google'),(req,res) => {
    
    //res.send(req.user)
    res.redirect('/profile/')
})


router.get('/logout', (req,res) => {
    //handle with passport
    req.logout();
    res.redirect('/home')
});

module.exports = router;
 