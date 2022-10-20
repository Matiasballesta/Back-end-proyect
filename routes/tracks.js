const express = require('express');
const { getItems, createItem, getItem, updateItem, deleteItem } = require('../controllers/tracks');
const router = express.Router()
const {validatorCreateItem, validatorGetItem} = require('../validators/tracks')


//Lista los items
router.get("/", getItems)


//Obtener detalle de item
router.get('/:id', validatorGetItem ,getItem)


//Crea un registro
router.post("/", validatorCreateItem, createItem)


//Actualiza un registro
router.put("/:id", validatorCreateItem, validatorGetItem, updateItem)

//Actualiza un registro
router.delete("/:id", validatorGetItem, deleteItem);





module.exports = router;