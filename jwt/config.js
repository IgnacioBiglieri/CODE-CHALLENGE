const jwt = require("jsonwebtoken");
const secret = 'code-challenge';

module.exports = {
    createToken: (data) => { 
        return jwt.sign({
            id: data.id,
            username: data.usuario,
            name: data.nombre
        }, secret, { expiresIn: '12h' }); 
    },
    verifyToken: (token) => {
        let validation
        try {
            validation = jwt.verify(token, secret);
        } catch (err) {
            validation=false; 
        }
        return validation;
    }
}