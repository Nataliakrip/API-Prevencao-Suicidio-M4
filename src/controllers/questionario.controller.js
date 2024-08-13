import Questionnaire from '../models/questionario.model.js';

export const createQuestionnaire = async (req, res) => {
  try {
    const { title, description, questions } = req.body;
    const newQuestionnaire = await Questionnaire.create({ title, description, questions });
    res.status(201).json(newQuestionnaire);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getQuestionnaireById = async (req, res) => {
  try {
    const questionnaire = await Questionnaire.findByPk(req.params.id);
    if (questionnaire) {
      res.status(200).json(questionnaire);
    } else {
      res.status(404).json({ message: 'Questionário não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateQuestionnaire = async (req, res) => {
  try {
    const { title, description, questions } = req.body;
    const questionnaire = await Questionnaire.findByPk(req.params.id);
    if (questionnaire) {
      questionnaire.title = title;
      questionnaire.description = description;
      questionnaire.questions = questions;
      await questionnaire.save();
      res.status(200).json(questionnaire);
    } else {
      res.status(404).json({ message: 'Questionário não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteQuestionnaire = async (req, res) => {
  try {
    const questionnaire = await Questionnaire.findByPk(req.params.id);
    if (questionnaire) {
      await questionnaire.destroy();
      res.status(204).send({ message: 'Questionario deletado com sucesso!'});
    } else {
      res.status(404).json({ message: 'Questionário não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

