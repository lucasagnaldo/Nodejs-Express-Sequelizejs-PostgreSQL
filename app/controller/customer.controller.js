const db = require('../config/db.config.js');
const Customer = db.customers;

// Post a Customer
exports.create = (req, res) => {
	// Save to PostgreSQL database

	
	Customer.create({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		age: req.body.age
	}).then(customer => {
		// Send created customer to client
		res.send(customer);
	});
};

// Update a Customer
exports.update = (req, res) => {
	const id = req.params.customerId;
	Customer.update({ firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age },
		{ where: { id_customer: req.params.customerId } }
	).then(() => {
		res.status(200).send("updated successfully a customer with id = " + id);
	});
};

// FETCH all Customers
exports.findAll = (req, res) => {
	Customer.findAll().then(customers => {
		// Send all customers to Client
		res.send(customers);
	});
};

// Find a Customer by Id
exports.findById = (req, res) => {
	Customer.findById(req.params.customerId).then(customer => {
		res.send(customer);
	})
};

// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.customerId;
	Customer.destroy({
		where: { id_customer: id }
	}).then(() => {
		res.status(200).send('deleted successfully a customer with id = ' + id);
	});
};