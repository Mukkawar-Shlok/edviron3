const express = require('express');
const router = express.Router();

const Controller = require('../../../controllers/api/v1/homeController');

router.get('/', Controller.getAll);
router.get('/:id', Controller.getOne);
router.put('/:id/reconcile', Controller.reconcile);

module.exports = router;