import { DataTypes, Sequelize } from 'sequelize'; 

const paciente = Sequelize.define('paciente', {
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

export { paciente };
