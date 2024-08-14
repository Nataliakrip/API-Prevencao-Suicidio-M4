import express from 'express';
import {
  createQuestionnaire,
  getQuestionnaireById,
  getAllQuestionnaire,
  updateQuestionnaire,
  deleteQuestionnaire
} from '../controllers/questionario.controller.js';

const router = express.Router();

router.post('/questionnaire', createQuestionnaire);
router.get('/questionnaires', getAllQuestionnaire);
router.get('/questionnaires/:id', getQuestionnaireById);
router.put('/questionnaires/:id', updateQuestionnaire);
router.delete('/questionnaires/:id', deleteQuestionnaire);

export default router;
