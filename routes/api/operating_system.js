const express = require('express');
const router = express.Router();
const { validationResult, check } = require('express-validator');
const bcrypt = require('bcryptjs');


//const response = require('../ ../config/response');
const Operating_System = require('../../models/Operating_System');


//@route GET api/operatingsystem
//@dec Get operatingsystem list
//@access public
router.get('/', async (req, res, next) => {
    try {
        let operating_systemlist = await Operating_System.getOperating_SystemList();

        res.json(operating_systemlist);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500).send('Server error');
    }
});

//@route GET api/operatingsystem/:id
//@dec Get a operatingsystem by id
//@access public
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        let operating_system = await Operating_System.getOperating_System(id);

        res.json(operating_system);
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server error');
        }
    });

    module.exports = router; 