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
					return res.json({
						data: adminData,
						status:200
					});
				} else {
					return res.json({
						data: {error : "El DNI no es válido"},
						status:401
					});
					;
				}
			} else {
				return res.json({
					data: {error : "No se encuentra el E-mail"},
					status:401
				});
			}
		})
	},
}