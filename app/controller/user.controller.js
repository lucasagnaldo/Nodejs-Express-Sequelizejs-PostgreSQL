const db = require('../config/db.config.js');
const User = db.users;

// Post a User
exports.create = (req, res) => {
	// Save to PostgreSQL database
	User.create(
		req.body
	).then(user => {
		// Send created user to client
		res.send(user);
	});
};

// Update a User
exports.update = (req, res) => {
	const id = req.params.userId;
	User.update(req.body,
		{ where: { id_user: req.params.userId } }
	).then(() => {
		res.status(200).send("updated successfully a user with id = " + id);
	});
};

// FETCH all Users
exports.findAll = (req, res) => {
	User.findAll().then(users => {
		// Send all users to Client
		res.send(users);
	});
};

// Find a User by Id
exports.findById = (req, res) => {
	User.findById(req.params.userId).then(user => {
		res.send(user);
	})
};

// Delete a User by Id
exports.delete = (req, res) => {
	const id = req.params.userId;
	User.destroy({
		where: { id_user: id }
	}).then(() => {
		res.status(200).send('deleted successfully a user with id = ' + id);
	});
};