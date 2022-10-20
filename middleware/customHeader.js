const customHeader = (req, res, next) => {
    try{
        const apiKey = req.headers.api_key;
        if(apiKey === 'mat'){
            next()
        }else{
            res.status(403);
            res.send({error: "API KEY NO ES CORECTA"})
        }

    }catch(e){
        res.status(403)
        res.send({error: 'Algo ocurrio en el costom' + e})
    }
}


module.exports = customHeader;