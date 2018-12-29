const db = require('../config/db.config.js');
const Sale = db.sales;

// Post a Sale
exports.create = (req, res) => {
	// Save to PostgreSQL database
	Sale.create(
		req.body
	).then(sale => {
		// Send created sale to client
		res.send(sale);
	}, err => res.send(err) )
};

// Update a Sale
exports.update = (req, res) => {
	const id = req.params.saleId;
	Sale.update(req.body,
		{ where: { id_sale: req.params.saleId } }
	).then(() => {
		res.status(200).send("updated successfully a sale with id = " + id);
	});
};

// FETCH all Sales
exports.findAll = (req, res) => {
	Sale.findAll().then(sales => {
		// Send all sales to Client
		res.send(sales);
	});
};

// Find a Sale by Id
exports.findById = (req, res) => {
	Sale.findById(req.params.saleId).then(sale => {
		res.send(sale);
	})
};

// Delete a Sale by Id
exports.delete = (req, res) => {
	const id = req.params.saleId;
	Sale.destroy({
		where: { id_sale: id }
	}).then(() => {
		res.status(200).send('deleted successfully a sale with id = ' + id);
	});
};