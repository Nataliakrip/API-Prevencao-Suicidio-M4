import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';

const paciente = sequelize.define('paciente', {
    name: {
        type: DataTypes.STRING,
        allowNull: true 
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dataNascimento: {
        type: DataTypes.DATE,
        allowNull: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: true
    },
});

export default paciente;  
