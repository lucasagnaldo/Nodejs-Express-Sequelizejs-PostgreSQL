var bcrypt = require('bcrypt');

module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('user', {
		id_user: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true
			}
		},
		password: {
			type: Sequelize.STRING
		}
	},
		{
			hooks: {
				beforeCreate: user => {
					const salt = bcrypt.genSaltSync();
					user.set('password', bcrypt.hashSync(user.password, salt));
				}
			}
		});

	User.isPassword = (encodedPassword, password) => {
		return bcrypt.compareSync(password, encodedPassword);
	}
	return User;
}