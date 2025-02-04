// src/routes/propertyRoutes.js
import express from 'express';
import {
  createProperty,
  getProperties,
  approveProperty
} from '../controllers/propertyController';
import { auth, authorize } from '../middleware/auth';

const router = express.Router();

router.post('/', auth, authorize('agent', 'admin'), createProperty);
router.get('/', getProperties);
router.patch('/:id/approve', auth, authorize('admin'), approveProperty);

export default router;
