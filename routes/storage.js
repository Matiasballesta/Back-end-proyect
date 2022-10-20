const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/hadleStorage')
const {validatorGetItem} = require('../validators/storage')
const { createItem } = require('../controllers/storage');
const { getItems, getItem, deleteItem } = require('../controllers/storage');



router.post('/',  uploadMiddleware.single("myfile") , createItem) 

router.get("/", getItems)

router.get("/:id", validatorGetItem, getItem)

router.delete("/:id", validatorGetItem, deleteItem)


module.exports = router