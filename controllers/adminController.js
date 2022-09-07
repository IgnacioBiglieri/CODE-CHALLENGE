const jwt = require('jsonwebtoken')
const db = require('../database/models');
const sequelize = db.sequelize;
const { validationResult } = require("express-validator");

module.exports = {

	login(req, res){
		let errors = validationResult(req);
	    if (!errors.isEmpty()) {
	      return res.json({
	        data: errors,
	        status: 300
	      });
	    }

		let admin = db.Users.findAll({
			where: {
				email: req.body.email,
				categoria : 'Admin'
		 	}
		})
		.then((admin)=>{
			return admin[0];
		});

		Promise.all([admin])
		.then(([adminData]) => {
			if (adminData) {
				if (req.body.dni == adminData.dni) {
					let token = token.createToken(adminData.nombre);

					return res.json({
						token: token, 
						name: adminData.nombre,
						data: adminData,
						status:200
					});
				}
			} 
			return res.json({
				data: {error : "Email o DNI no válido"},
				status:401
			});
		})
	},
}