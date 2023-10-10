const express = require('express');
const router = express.Router();

const Controller = require('../../../controllers/api/v1/homeController');

router.get('/', Controller.getAllDisbursement);
router.post('/', Controller.createDisbursement);

module.exports = router;