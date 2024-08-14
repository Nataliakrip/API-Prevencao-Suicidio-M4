import {
    deleteById,
    getAllHistoricos,
    getById,
    updateHistoricoById,
    createHistorico
} from "../controllers/historico.js";
import { Router } from "express";

const historicoRouter = Router();

historicoRouter.get("/historicos/all", getAllHistoricos);
historicoRouter.post("/historicos", createHistorico);
historicoRouter.get("/historicos/:id", getById);
historicoRouter.delete("/historicos/:id", deleteById);
historicoRouter.put("/historicos/:id", updateHistoricoById);

export { historicoRouter };