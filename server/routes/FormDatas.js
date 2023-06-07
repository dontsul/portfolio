import { Router } from 'express';
import { postForm } from '../controllers/FormDatas.js';

const router = new Router();
router.post('/', postForm);

export default router;
