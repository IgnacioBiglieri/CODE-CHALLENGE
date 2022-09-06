const { Op } = require('sequelize');
const db = require('../database/models');
const sequelize = db.sequelize;

module.exports = {
	register:(req, res) => {
		console.log('body', req.body);
		let crearUsuario = db.Users.create(req.body).then((usuario)=>{
			return usuario;
		});

		Promise.all([crearUsuario]).then(([crearUsuario])=>{
			res.json({
	            data: crearUsuario,
	            status: 200
	        })
		})
	},
	list:(req, res) => {
		let usuarios = db.Users.findAll({where: {
			categoria: {
				[Op.ne]:'Admin'}
			}
		}).then((usuarios)=>{
			return usuarios;
		});

        Promise.all([usuarios]).then(([usuarios]) => {
        	res.json({
	            data: usuarios,
	            status: 200
	        })
        })
	},
}