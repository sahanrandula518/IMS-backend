const express = require('express');
const router = express.Router();
const { validationResult, check } = require('express-validator');
const bcrypt = require('bcryptjs');


//const response = require('../ ../config/response');
const Item_Model = require('../../models/Item_Model');


//@route GET api/item_model
//@dec Get item_model list
//@access public
router.get('/', async (req, res, next) => {
    try {
        let item_modellist = await Item_Model.getItem_ModelList();

        res.json(item_modellist);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500).send('Server error');
    }
});

//@route GET api/item_model/:id
//@dec Get a item_model by id
//@access public
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        let item_model = await Item_Model.getItem_Model(id);

        res.json(item_model);
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server error');
        }
    });

    module.exports = router; 