const express = require('express');
const router = express.Router();
const { validationResult, check } = require('express-validator');
const bcrypt = require('bcryptjs');


//const response = require('../ ../config/response');
 const Item_Type = require('../../models/Item_Type');


//@route GET api/item_type
//@dec Get item_type list
//@access public
router.get('/', async (req, res, next) => {
    try {
        let item_typelist = await Item_Type.getItem_TypelList();

        res.json(item_typelist);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500).send('Server error');
    }
});

//@route GET api/item_type/:id
//@dec Get a item_type by id
//@access public
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        let item_type = await Item_Type.getItem_Type(id);

        res.json(item_type);
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server error');
        }
    });

    module.exports = router; 