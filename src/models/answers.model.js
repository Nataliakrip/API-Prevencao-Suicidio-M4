// src/models/resposta.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
import Questionnaire from './questionario.model.js';

const Response = sequelize.define('Response', {
  answers: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

// Estabelece a relação entre Response e Questionnaire
Response.belongsTo(Questionnaire, {
  foreignKey: 'questionnaireId',
  as: 'questionnaire'
});

export default Response;
