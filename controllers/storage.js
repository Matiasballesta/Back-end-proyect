const { matchedData } = require('express-validator');
const fs = require('fs')
const {storageModel} = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`
const {handleHttpError} = require('../utils/handleError')



const getItems = async (req,res) => {
    try{
        const data = await storageModel.find({});
        res.send({data})
    }catch(e){
        handleHttpError(res, "ERROR_LIST_ITEMS")
    }
}


const getItem = async (req,res) => {
    try{
        const {id} = matchedData(req);
        const data = await storageModel.findById(id);
        res.send({data})

    }catch(e){
        handleHttpError(res, "ERROR_DETAIL_ITEMS")
    }
   
};

const createItem = async (req,res) => {
    const {file} = req
    const filedata = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(filedata)
    res.send({data})
};



const updatetem = (req,res) => {

};


const deleteItem = async (req,res) => {
    try{
        const {id} = matchedData(req);
        const dataFile = await storageModel.findById(id);
        await storageModel.delete({_id: id})
        const {filename} = dataFile;
        const filepath = `${MEDIA_PATH}/${filename}`

        //fs.unlinkSync(filepath)
        const dataa = {
            filepath,
            deleted: 1
        }
        res.send({dataa})
    }catch(e){
        handleHttpError(res, "ERROR_DETAIL_ITEMS")
    }
};


module.exports = { getItems, getItem, createItem, updatetem, deleteItem }