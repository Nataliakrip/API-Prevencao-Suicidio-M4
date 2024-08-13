
import sequelize, { DataTypes } from "sequelize";

const Profissional = sequelize.define("Profissional", {
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
	telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export { Profissional };