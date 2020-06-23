const helpers = {};
helpers.isAthenticated = (req, res, next) => {
    if(req.isAthenticated()) {
        return next();
    }
    else{
        req.flash('error_msg', 'Not Authorized');
        res.redirect('/users/signin');
    }
};

module.exports = helpers;