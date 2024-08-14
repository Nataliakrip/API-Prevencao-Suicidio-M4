import { Router } from 'express';
import {
  createProfessional,
  getAllProfessionals,
  getProfessionalById,
  updateProfessional,
  deleteProfessional
} from '../controllers/professional.controller.js';

const router = Router();

router.post('/professionals', createProfessional);
router.get('/professionals', getAllProfessionals);
router.get('/professionals/:id', getProfessionalById);
router.put('/pofessionals/:id', updateProfessional);
router.delete('/professionals/:id', deleteProfessional);

export default router;
