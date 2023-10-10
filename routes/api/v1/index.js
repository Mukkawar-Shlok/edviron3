const express = require('express');
const router = express.Router();

router.use('/transactions', require('./transactionsRoute'));
router.use('/disbursement', require('./disbursementRoute'));

module.exports = router;