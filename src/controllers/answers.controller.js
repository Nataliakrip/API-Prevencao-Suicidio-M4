// src/controllers/resposta.controller.js
import Response from '../models/answers.model.js';

export const createResponse = async (req, res) => {
  try {
    const { questionnaireId, answers, score } = req.body;
    const newResponse = await Response.create({ questionnaireId, answers, score });
    res.status(201).json(newResponse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getResponseById = async (req, res) => {
  try {
    const response = await Response.findByPk(req.params.id, {
      include: 'questionnaire'
    });
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: 'Resposta não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateResponse = async (req, res) => {
  try {
    const { answers, score } = req.body;
    const response = await Response.findByPk(req.params.id);
    if (response) {
      response.answers = answers;
      response.score = score;
      await response.save();
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: 'Resposta não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteResponse = async (req, res) => {
  try {
    const response = await Response.findByPk(req.params.id);
    if (response) {
      await response.destroy();
      res.status(204).send({ message: 'Questionario deletado com sucesso!'});
    } else {
      res.status(404).json({ message: 'Resposta não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
