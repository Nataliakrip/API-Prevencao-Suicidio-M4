import { Profissional } from "../models/profissionais.js";

export const getAllProfissionais = async (request, response) => {
    try {
        const profissionais = await Profissional.findAll();
        response.status(200).send(profissionais);
    } catch {
        response.status(500).send({
            error: "Não foi possivel encontrar os profissionais", 
        });
    }
};

export const crateProfissional = async (request, response) => {
    try {
        const newProfissional = request.body;
        const profissionalCriado = await Profissional.create(newProfissional);
        response.status(201).send({
            message: "Profissional criado com sucesso",
            novoProfissional: profissionalCriado,
        });
    } catch {
        response.status(500).send({error:"Nãao foi possivel criar um profissional"});   
    };
};
export const getById = async (request, response) => {
	try {
		const idParametro = request.params.id
		const profissionalEncontrado = await Profissional.findByPk(idParametro)
		response.status(200).send(profissionalEncontrado)
	} catch (e) {
		response.status(404).send({
			error: e.message,
		});
	}
};


export const deleteById = async (request, response) => {
	let idParametro = request.params.id;

	try {
		let profissionalParaDeleta = await Profissional.findByPk(idParametro)

		if (!profissionalParaDeleta) {
    throw new Error("Not found");
    }

		await profissionalParaDeleta.destroy()

		response.status(204).send();
	} catch (e) {
		response.status(404).send(e.message);
	}
}

export const updateProfissionalById = async (request, response) => {
	const idParametro = request.params.id;

	try {
		const profissionalDaRequest = request.body
		const profissionalParaAtualizar = await Pet.findByPk(idParametro)

		if (!profissionalParaAtualizar) {
    throw new Error("Not found");
    }

		const profissionalAtualizado = await profissionalParaAtualizar.update(profissionalDaRequest)
		response.status(201).send({
			message: "Profissional criado com suceso",
			profissionalAtualizado,
		});

	} catch (e) {
		response.status(404).send({
			error: e.message,
		});
	}
};