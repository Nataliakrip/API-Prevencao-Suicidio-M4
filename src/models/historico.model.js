import { DataTypes } from "sequelize";
import sequelize from '../database/config.js';

const Historico = sequelize.define("Historico", {
	nome: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	idade: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	data_e_hora: {
        type: DataTypes.DATE,
        allowNull: false,
    }
});


export { Historico };