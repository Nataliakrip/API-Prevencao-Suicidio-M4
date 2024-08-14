import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';

const Resource = sequelize.define('Resource', {
  name: {
    type: DataTypes.STRING,
    allowNull: true 
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  contactInfo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

export default Resource;
