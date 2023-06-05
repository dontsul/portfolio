import { Router } from 'express';
import { getAll } from '../controllers/Projects.js';
import { getById } from '../controllers/Projects.js';

const router = new Router();

router.get('/', getAll);
router.get('/:id', getById);

export default router;
