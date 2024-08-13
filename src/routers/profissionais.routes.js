import {
    deleteById,
    getAllProfissionais,
    getById,
    updateProfissionalById,
    createProfissional
} from "../controllers/profissionais.js";
import { Router } from "express";

const profissionalRouter = Router();

profissionalRouter.get("/profissionais/all", getAllProfissionais);
profissionalRouter.post("/profissionais", createProfissional);
profissionalRouter.get("/profissionais/:id", getById);
profissionalRouter.delete("/profissionais/:id", deleteById);
profissionalRouter.put("/profissionais/:id", updateProfissionalById);

export { profissionalRouter };