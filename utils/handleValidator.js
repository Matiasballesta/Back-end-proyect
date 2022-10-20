const { validationResult } = require('express-validator')

const validateResult = (req,res,next) => {
    try{
        validationResult(req).throw() // Si hay error, va al catch.
        return next() // Esto siginigica que no si no hay error que continue.
    }catch(err){
        res.status(403)
        res.send({errors: err.array()})
    }
}

module.exports = validateResult;