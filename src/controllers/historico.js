import { Historico } from "../models/historico.js";

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
        response.status(500).send({error:"Nãao foi possivel criar um historico"});   
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

export const updateHistoricoById = async (request, response) => {
	const idParametro = request.params.id;

	try {
		const historicoDaRequest = request.body
		const historicoParaAtualizar = await Pet.findByPk(idParametro)

		if (!historicolParaAtualizar) {
    throw new Error("Not found");
    }

		const historicoAtualizado = await historicoParaAtualizar.update(historicoDaRequest)
		response.status(201).send({
			message: "historico criado com suceso",
			historicoAtualizado,
		});

	} catch (e) {
		response.status(404).send({
			error: e.message,
		});
	}
};