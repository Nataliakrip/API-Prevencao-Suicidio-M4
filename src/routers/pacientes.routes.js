import { Router } from 'express';
import {
    createPaciente,
    getAllPacientes,
    getPacienteById,
    updatePaciente,
    deletePaciente
} from '../controllers/pacientes.controller.js';

const pacienteRouter = Router();

pacienteRouter.post('/paciente', createPaciente);
pacienteRouter.get('/pacientes', getAllPacientes);
pacienteRouter.get('/pacientes/:id', getPacienteById);
pacienteRouter.put('/pacientes/:id', updatePaciente);
pacienteRouter.delete('/pacientes/:id', deletePaciente);

export default pacienteRouter;
