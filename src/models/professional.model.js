import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';

const MentalHealthProfessional = sequelize.define('MentalHealthProfessional', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  specialization: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

export default MentalHealthProfessional;
