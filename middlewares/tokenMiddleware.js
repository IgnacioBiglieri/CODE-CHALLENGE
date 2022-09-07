const token = require('../jwt/config');
const db = require('../database/config');

module.exports = async (req, res, next) => {
    let errors = [];                                                                    //defino errores

    const permiso = req.get('authorization');                                           //obtengo la cabezera con el token
    let tokenAdmin = '';                                                                //defino token como variable vacia

    if (permiso && permiso.startsWith('Bearer'))                                        //me fijo si usa el standar del token
    {
        tokenAdmin = permiso.substring(7);                                              //obtengo el token
    }

    let decoded = token.verifyToken(tokenAdmin);                                        //decodifico el token

    if (decoded == false)                                                               //verifico si coincidio el secret
    {
        errors.push({ name: 'token', msg: 'token invalido' });                          //agrego error
    }
    else {
        let admin = db.Users.findAll({
            where: {
                email: decoded.email,
                dni : decoded.dni,
                categoria : 'Admin'
            }
        })
        .then((admin)=>{
            return admin[0] ?? null;
        });
        if (!admin)                                                             //me fijo si se encontro el admin
        {
            errors.push({ name: 'data', msg: 'usuario no existe' });                    //agrego error
        }
    }
    req.errors = errors;                                                                //agrego los errores al request
    next()
}