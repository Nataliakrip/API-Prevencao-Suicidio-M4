import { pacienteRouter } from "express";
import { createPaciente, getAllPacientes, getPacienteById, updatePaciente, deletePaciente } from "../controllers/pacientes.controller.js";
import { pacienteRouter} from './controller/pacientes.controller.js'; 


pacienteRouter.post('/pacientes', createPaciente);

pacienteRouter.get('/pacientes', getAllPacientes);

pacienteRouter.get('/pacientes/:id', getPacienteById);

pacienteRouter.put('/pacientes/:id', updatePaciente);

pacienteRouter.delete('/pacientes/:id', deletePaciente);

