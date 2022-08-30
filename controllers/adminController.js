const db = require('../database/models');
const sequelize = db.sequelize;

module.exports = {
	login(req, res){
		res.send("login funcional");
	},
}