module.exports = function (app) {

    const users = require('../controller/user.controller.js');

    // Create a new User
    app.post('/api/users', [app.auth.authenticate()], app.urlencodedParser, users.create);

    // Update a User with Id
    app.put('/api/users/:userId', [app.auth.authenticate()], app.urlencodedParser, users.update);

    // Retrieve all User
    app.get('/api/users', app.auth.authenticate(), users.findAll);

    // Retrieve a single User by Id
    app.get('/api/users/:userId', [app.auth.authenticate()], users.findById);

    // Delete a User with Id
    app.delete('/api/users/:userId', [app.auth.authenticate()], users.delete);
}