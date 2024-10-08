import { Router } from 'express';
import tourismController from '../controllers/tourism-controller.js';
import discountCodesController from '../controllers/discount-codes-controller.js';

const router = Router();

router.get('/tourism', tourismController.getTourismAccounts);
router.get('/discount-codes', discountCodesController.getDiscountCodesAccounts);

export default router;
