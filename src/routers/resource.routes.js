import express from 'express';
import {
  createResource,
  getAllResources,
  getResourceById,
  updateResource,
  deleteResource
} from '../controllers/resource.controller.js';

const router = express.Router();

router.post('/resource', createResource);
router.get('/resources', getAllResources);
router.get('/resources/:id', getResourceById);
router.put('/resources/:id', updateResource);
router.delete('/resources/:id', deleteResource);

export default router;
