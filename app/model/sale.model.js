module.exports = (sequelize, Sequelize) => {
	const Sale = sequelize.define('sale', {
		id_sale: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		date_sale: {
			type: Sequelize.DATE,
			allowNull: false
		},
		price: {
			type: Sequelize.REAL,
			allowNull: true,
		}
	});
	return Sale;
}