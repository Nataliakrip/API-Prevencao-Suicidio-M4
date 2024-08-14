import Paciente from '../models/pacientes.model.js';

// Função para criar um novo paciente
export const createPaciente = async (req, res) => {
    try {
        const paciente = await Paciente.create(req.body);
        res.status(201).json({ message: 'O paciente foi criado com sucesso', paciente });
    } catch (error) {
        res.status(400).json({ error: 'Não foi possível criar o paciente', detalhes: error.message });
    }
};

// Função para obter todos os pacientes
export const getAllPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.findAll();
        res.status(200).json({mensage: "lista de pacientes", pacientes});
    } catch (error) {
        res.status(400).json({ error: 'Não foi possível buscar os pacientes', detalhes: error.message });
    }
};

// Função para obter um paciente por ID
export const getPacienteById = async (req, res) => {
    try {
        const paciente = await Paciente.findByPk(req.params.id);
        if (paciente) {
            res.status(200).json(paciente);
        } else {
            res.status(404).json({ message: 'Paciente não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Não foi possível buscar o paciente', detalhes: error.message });
    }
};

// Função para atualizar um paciente
export const updatePaciente = async (req, res) => {
    try {
        const paciente = await Paciente.findByPk(req.params.id);
        if (paciente) {
            await paciente.update(req.body);
            res.status(200).json({ message: 'O paciente foi atualizado com sucesso', paciente });
        } else {
            res.status(404).json({ message: 'Paciente não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Não foi possível atualizar o paciente', detalhes: error.message });
    }
};

// Função para deletar um paciente
export const deletePaciente = async (req, res) => {
    try {
        const paciente = await Paciente.findByPk(req.params.id);
        if (paciente) {
            await paciente.destroy();
            res.status(200).json({ message: 'O paciente foi deletado com sucesso' });
        } else {
            res.status(404).json({ message: 'Paciente não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Não foi possível deletar o paciente', detalhes: error.message });
    }
};
