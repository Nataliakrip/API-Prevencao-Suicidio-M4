import MentalHealthProfessional from "../models/professional.model.js";

// Criar um novo profissional
export const createProfessional = async (req, res) => {
  try {
    const professional = await MentalHealthProfessional.create(req.body);
    res.status(201).json({ message: 'Profissional de saúde mental criado com sucesso', professional });
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar o profissional' });
  }
};

// Obter todos os profissionais
export const getAllProfessionals = async (req, res) => {
  try {
    const professionals = await MentalHealthProfessional.findAll();
    res.status(200).json(professionals);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar os profissionais' });
  }
};

// Obter um profissional pelo ID
export const getProfessionalById = async (req, res) => {
  try {
    const professional = await MentalHealthProfessional.findByPk(req.params.id);
    if (professional) {
      res.status(200).json(professional);
    } else {
      res.status(404).json({ error: 'Profissional não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar o profissional' });
  }
};

// Atualizar um profissional pelo ID
export const updateProfessional = async (req, res) => {
  try {
    const professional = await MentalHealthProfessional.findByPk(req.params.id);
    if (professional) {
      await professional.update(req.body);
      res.status(200).json({ message: 'Profissional atualizado com sucesso', professional });
    } else {
      res.status(404).json({ error: 'Profissional não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar o profissional' });
  }
};

// Deletar um profissional pelo ID
export const deleteProfessional = async (req, res) => {
  try {
    const professional = await MentalHealthProfessional.findByPk(req.params.id);
    if (professional) {
      await professional.destroy();
      res.status(200).json({ message: 'Profissional deletado com sucesso' });
    } else {
      res.status(404).json({ error: 'Profissional não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar o profissional' });
  }
};
