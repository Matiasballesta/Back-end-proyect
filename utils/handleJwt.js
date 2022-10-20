const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET


//Se debe pasar el obj del usuario
const tokenSign = async (user) => {
    const sign = jwt.sign(
        {
            _id: user._id,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: "2h"
        }
    );

    return sign;
};

//Se debe pasar el token de session de JWT
const verifyToken = async (tokenJwT) => {
    try{
      return jwt.verify(tokenJwT, JWT_SECRET)
    }catch(e){
        return null;
    }
}


module.exports = {tokenSign, verifyToken};