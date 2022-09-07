const jwt = require("jsonwebtoken");
const secret = 'code-challenge';

module.exports = {
    createToken: (data) => { 
        return jwt.sign({
            id: data.id,
            email: data.email,
            dni: data.dni
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