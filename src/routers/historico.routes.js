import {
    deleteById,
    getAllHistoricos,
    getById,
    updateHistoricoById,
    createHistorico
} from "../controllers/historico.controller.js";
import { Router } from "express";

const router = Router();

router.get("/historicos/all", getAllHistoricos);
router.post("/historicos", createHistorico);
router.get("/historicos/:id", getById);
router.delete("/historicos/:id", deleteById);
router.put("/historicos/:id", updateHistoricoById);

export default router;