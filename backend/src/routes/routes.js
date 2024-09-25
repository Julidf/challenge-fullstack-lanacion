const express = require('express');
const router = express.Router();
const tourismController = require('../controllers/tourism-controller');
const discountCodesController = require('../controllers/discount-codes-controller');

router.get('/tourism', tourismController.getTourismAccounts);
router.get('/discount-codes', discountCodesController.getDiscountCodesAccounts);

module.exports = router;
