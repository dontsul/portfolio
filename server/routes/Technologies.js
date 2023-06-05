import { Router } from 'express';

import { getAllTechnologies } from '../controllers/Technologies.js';

const router = new Router();

router.get('/', getAllTechnologies);

export default router;
