const { Op } = require('sequelize');
const db = require('../database/models');
const { validationResult } = require("express-validator");
const sequelize = db.sequelize;

module.exports = {
	register:(req, res) => {
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
		if(!req.errors.length){
			let usuarios = db.Users.findAll({where: {
				categoria: {
					[Op.ne]:'Admin'}
				}
			}).then((usuarios)=>{
				return usuarios;
			});

	        Promise.all([usuarios]).then(([usuarios]) => {
	        	return res.json({
		            data: usuarios,
		            status: 200
		        })
	        })
		}

		return res.json({
            data: {errors : 'No tiene permitido ingresar'},
            status: 404,
        })
	},
}