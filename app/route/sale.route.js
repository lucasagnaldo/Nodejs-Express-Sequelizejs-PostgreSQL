module.exports = function (app) {
    const sales = require('../controller/sale.controller.js');
    // Create a new Sale
    app.post('/api/sales', [app.auth.authenticate()], app.urlencodedParser, sales.create);

    // // Update a Sale with Id
    app.put('/api/sales/:saleId', [app.auth.authenticate()], app.urlencodedParser, sales.update);

    // // Retrieve all Sale
    app.get('/api/sales', app.auth.authenticate(), sales.findAll);

    // // Retrieve a single Sale by Id
    app.get('/api/sales/:saleId', [app.auth.authenticate()], sales.findById);

    // // Delete a Sale with Id
    app.delete('/api/sales/:saleId', [app.auth.authenticate()], sales.delete);
}