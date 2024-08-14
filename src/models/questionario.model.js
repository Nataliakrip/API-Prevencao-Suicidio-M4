import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';

const Questionnaire = sequelize.define('Questionnaire', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  questions: {
    type: DataTypes.JSONB,
    allowNull: false,
  }
});

export default Questionnaire;

