import { Model, DataTypes } from "sequelize"
import sequelize from "../db.js"

class Table extends Model {}

Table.init(
	{
		number: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: true
		},
		status: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "available"
		}
	},
	{
		sequelize,
		modelName: "Table"
	}
)

export default Table
