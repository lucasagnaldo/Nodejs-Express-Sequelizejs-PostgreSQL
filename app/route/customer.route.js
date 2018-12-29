module.exports = function (app) {
    const customers = require('../controller/customer.controller.js');
    // Create a new Customer
    app.post('/api/customers', [app.auth.authenticate()], app.urlencodedParser, customers.create);

    // Update a Customer with Id
    app.put('/api/customers/:customerId', [app.auth.authenticate()], app.urlencodedParser, customers.update);

    // Retrieve all Customer
    app.get('/api/customers', [app.auth.authenticate()], customers.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/customers/:customerId', [app.auth.authenticate()], customers.findById);

    // Delete a Customer with Id
    app.delete('/api/customers/:customerId', [app.auth.authenticate()], customers.delete);
}