const db = require('../database/models');
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
		let usuarios = db.Users.findAll().then((usuarios)=>{
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


/* register:(req, res) => {
db.Users.findAll().then((user) => {
	let usuarioEnDB = user.find((i) => i.email == req.body.email);
	if (usuarioEnDB) {
		return res.render('register', {
			errors: {
				email: {
					msg: 'Este email ya está registrado',
				},
			},
			oldData: req.body,
		})
	} else {
		category = "User";
		db.Users.create({
			nombre: req.body.nombre,
			apellido: req.body.apellido,
			dni: req.boody.dni,
			telefono: req.body.telefono,
			email: req.body.email,
			domicilio: req.body.domicilio,
			category: "User",
		})
		.then(() => {
			return res.redirect('/users/register')
		})
			.catch((error) => {
			console.log(error);
		})
	}
})
} */