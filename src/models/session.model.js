import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';

const Session = sequelize.define('Session', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contactInfo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default Session;
