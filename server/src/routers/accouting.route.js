import express from 'express'
import { create, getAll } from '../controllers/Account/accounting.controller.js';
import { verifyToken } from '../middlewares/verifyToken.js';
const router = express.Router();

router.post(`/create`, verifyToken, create);
router.get(`/getAll`, verifyToken, getAll);

export default router;