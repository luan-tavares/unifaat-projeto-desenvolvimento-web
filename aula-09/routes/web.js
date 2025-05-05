// routes/todolist.js

import { Router } from 'express';
import UploadController from '../controllers/UploadController.js';

const router = Router();

// Rota GET para listar todos
router.post('/upload', UploadController.upload);

router.get('/fetch', UploadController.fetch);

export default router;