// src/routes/resposta.routes.js
import express from 'express';
import {
  createResponse,
  getResponseById,
  updateResponse,
  deleteResponse
} from '../controllers/answers.controller.js';

const router = express.Router();

router.post('/mental-health-check', createResponse);
router.get('/mental-health-checks/:id', getResponseById);
router.put('/mental-health-checks/:id', updateResponse);
router.delete('/mental-health-checks/:id', deleteResponse);

export default router;
