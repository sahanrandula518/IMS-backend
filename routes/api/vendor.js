const express = require('express');
const router = express.Router();
const { validationResult, check } = require('express-validator');
const bcrypt = require('bcryptjs');


//const response = require('../ ../config/response');
const Vendor = require('../../models/Vendor');


//@route GET api/vendor
//@dec Get vendor list
//@access public
router.get('/', async (req, res, next) => {
    try {
        let vendorlist = await Vendor.getVendorList();

        res.json(vendorlist);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500).send('Server error');
    }
});

//@route GET api/vendor/:id
//@dec Get a vendor by id
//@access public
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        let vendor = await Vendor.getVendor(id);

        res.json(vendor);
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server error');
        }
    });

    module.exports = router; 