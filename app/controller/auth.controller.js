const secret = require('../../app/auth/secret.js');
const jwt =  require('jwt-simple');
const db = require('../config/db.config.js');
const User = db.users;

// Auth
exports.auth = (req, res) => {
	if (req.body.email && req.body.password) {
		const email = req.body.email;
		const password = req.body.password;
		User.findOne({ where: { email } })
			.then(user => {
				if (User.isPassword(user.password, password)) {
					const payload = { id: user.id_user };
					res.json({
						token: jwt.encode(payload, secret.jwtSecret),
					});
				} else {
					res.status(500).send("Senha inválida!");
				}
			}).catch( err => {
				console.log(err);
				res.status(500).send("Não foi possível realizar a autenticação!");
			})
	} else {
		res.status(500).send("Favor preencher e-mail e senha!");
	}
};
