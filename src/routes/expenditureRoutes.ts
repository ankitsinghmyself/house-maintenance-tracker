import express from 'express';
import { createExpenditure, getExpenditures } from '../controllers/expenditureController';

const router = express.Router();

router.post('/', createExpenditure);
router.get('/', getExpenditures);

export default router;
