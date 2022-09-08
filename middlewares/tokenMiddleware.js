const token = require('../jwt/config');
const db = require('../database/models');

module.exports = async (req, res, next) => {
    let errors = [];  
    

    const permiso = req.get('authorization');                         
    let tokenAdmin = '';         

    if (permiso && permiso.startsWith('Bearer')) 
    {
        tokenAdmin = permiso.substring(7);
    }


    let decoded = token.verifyToken(tokenAdmin); 

    if (decoded == false) 
    {
        errors.push({ name: 'token', msg: 'token invalido' });
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
        if (!admin)
        {
            errors.push({ name: 'data', msg: 'usuario no existe' });
        }
        
    }

    req.errors = errors; 
    next()
}