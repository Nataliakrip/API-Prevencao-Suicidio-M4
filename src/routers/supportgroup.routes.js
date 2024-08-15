import express from 'express';
import {
  createGroup,
  getAllGroup,
  getGroupById,
  updateGroup,
  deleteGroup,
} from '../controllers/supportgroup.controller.js';

const router = express.Router();

router.post('/group', createGroup);
router.get('/groups', getAllGroup);
router.get('/group/:id', getGroupById);
router.put('/group/:id', updateGroup);
router.delete('/group/:id', deleteGroup);

export default router;