module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('customer', {
		id_customer: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		firstname: {
			type: Sequelize.STRING(60)
		},
		lastname: {
			type: Sequelize.STRING(60)
		},
		age: {
			type: Sequelize.INTEGER
		}
	});
	return Customer;
}