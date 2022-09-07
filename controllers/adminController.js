const jwt = require('../jwt/config');
const db = require('../database/models');
const sequelize = db.sequelize;
const { validationResult } = require("express-validator");


module.exports = {

	login(req, res){
		console.log(req.body);
		let errors = validationResult(req);
	    if (!errors.isEmpty()) {
	      return res.json({
	        data: errors,
	        status: 300
	      });
	    }

		console.log(req.body);

		let admin = db.Users.findAll({
			where: {
				email: req.body.email,
				categoria : 'Admin'
		 	}
		})
		.then((admin)=>{
			return admin[0];
		}).catch(e => {
			console.log(e);
		})

			console.log(admin);

		Promise.all([admin])
		.then(([adminData]) => {
			if (adminData) {

				console.log(adminData);

				if (req.body.dni == adminData.dni) {
					let token = jwt.createToken(adminData);

					console.log(token);

					return res.send({
						token: token, 
						/* name: adminData.nombre,
						data: adminData, */
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