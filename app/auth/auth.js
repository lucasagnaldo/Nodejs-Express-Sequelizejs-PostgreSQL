const secret = require('../../app/auth/secret.js');
var passport = require('passport');
var passportJwt = require('passport-jwt');
var Strategy = passportJwt.Strategy;
var ExtractJwt = passportJwt.ExtractJwt;

const db = require('../config/db.config.js');
const User = db.users;

module.exports = function () {
    const opts = {};
    opts.secretOrKey = secret.jwtSecret;
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

    const strategy = new Strategy(opts, (payload, done) => {
       User.findById(payload.id).then(user => {
            if (user) {
                return done(null, {
                    id: user.id_user,
                    email: user.email,
                });
            }
            return done(null, false);
        }).catch(error => done(error, null));
    });

    passport.use(strategy);

    return {
        initialize: () => passport.initialize(),
        authenticate: () => passport.authenticate('jwt', secret.jwtSession),
    };

};