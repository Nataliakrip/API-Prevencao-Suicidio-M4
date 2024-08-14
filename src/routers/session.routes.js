import express from 'express';
import {
  createSession,
  getSessionById,
  getAllSessions,
  updateSession,
  deleteSession
} from '../controllers/session.controller.js';

const router = express.Router();

router.post('/sessions', createSession);
router.get('/sessions', getAllSessions);
router.get('/sessions/:id', getSessionById);
router.put('/sessions/:id', updateSession);
router.delete('/sessions/:id', deleteSession);

export default router;
