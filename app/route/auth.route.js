module.exports = function (app) {
    const auth = require('../controller/auth.controller.js');
    app.post('/api/auth', app.urlencodedParser, auth.auth);
}