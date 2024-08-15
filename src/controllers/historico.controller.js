import { Historico } from "../models/historico.model.js";

export const getAllHistoricos = async (request, response) => {
    try {
        const historicos = await Historico.findAll();
        response.status(200).send(historicos);
    } catch {
        response.status(500).send({
            error: "Não foi possivel encontrar o historico", 
        });
    }
};

export const createHistorico = async (request, response) => {
    try {
        const newHistorico = request.body;
        const historicoCriado = await Historico.create(newHistorico);
        response.status(201).send({
            message: "historico criado com sucesso",
            novoHistorico: historicoCriado,
        });
    } catch {
        response.status(500).send({error:"Não foi possivel criar um historico"});   
    };
};

export const getById = async (request, response) => {
	try {
		const idParametro = request.params.id
		const historicoEncontrado = await Historico.findByPk(idParametro)
		response.status(200).send(historicoEncontrado)
	} catch (e) {
		response.status(404).send({
			error: e.message,
		});
	}
};

export const deleteById = async (request, response) => {
	let idParametro = request.params.id;

	try {
		let historicoParaDeleta = await Historico.findByPk(idParametro)

		if (!historicoParaDeleta) {
    throw new Error("Not found");
    }

		await historicoParaDeleta.destroy()

		response.status(204).send();
	} catch (e) {
		response.status(404).send(e.message);
	}
}

export const updateHistoricoById = async (req, res) => {
	try {
	  const historico = await Historico.findByPk(req.params.id);
	  if (historico) {
		await historico.update(req.body);
		res.status(200).json({ message: 'Historico atualizado com sucesso', historico });
	  } else {
		res.status(404).json({ error: 'Resource not found' });
	  }
	} catch (error) {
	  res.status(400).json({ error: 'Failed to update resource' });
	}
  };
