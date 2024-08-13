import express from 'express';
import {
  createQuestionnaire,
  getQuestionnaireById,
  updateQuestionnaire,
  deleteQuestionnaire
} from '../controllers/questionario.controller.js';

const router = express.Router();

router.post('/questionnaires', createQuestionnaire);
router.get('/questionnaires/:id', getQuestionnaireById);
router.put('/questionnaires/:id', updateQuestionnaire);
router.delete('/questionnaires/:id', deleteQuestionnaire);

export default router;
