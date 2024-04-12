import express from 'express';
import * as adminController from '../controllers/admin.js';

const router = express.Router();

router.get('/', adminController.index);


export default router;