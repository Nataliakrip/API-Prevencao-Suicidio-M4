import sequelize, { DataTypes } from "sequelize";

const Historico = sequelize.define("Historico", {
    id: {
		type: DataTypes.NUMBER,
		primaryKey: true,
		autoIncrement: true,
	},
	nome: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	idade: {
		type: DataTypes.NUMBER,
		allowNull: false,
	},
	data_e_hora: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export { Historico };